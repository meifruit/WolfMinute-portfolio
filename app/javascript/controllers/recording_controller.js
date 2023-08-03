import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="recording"
import Rails from "@rails/ujs";


export default class extends Controller {
  static targets = ["start_recording", "stop_recording", 'ear', "clip", "start_playback", "reset_playback", "upload", "milliseconds", "form"]
  isRecording = false;
  // clip = null;

  initialize() {
    this.clip = null;
    this.startTime = 0;
    this.stopTime = 0;
    this.totalMilliseconds = 0;
    this.mediaRecorder = null;
  }

  async connect() {
    console.log("Recording controller standing by");
    console.log(`Recording: ${this.isRecording}`);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');
      const stopButton = this.stop_recordingTarget;
      const audioPlayer = this.clipTarget.children[0];

      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          {
            audio: true
          })
        this.mediaRecorder = new MediaRecorder(stream);
        console.log("What is happening?", this.mediaRecorder);
      }
      catch (err) {
        console.log('The following getUserMedia error occurred: ' + err);
      }
    }
  }

  record() {
    // Not recording and no clip
    if (this.isRecording === false && !this.clip) {
      this.isRecording = true;
      this.stop_recordingTarget.classList.remove("d-none")
      this.earTarget.classList.remove("d-none")
      this.start_recordingTarget.classList.add("d-none")


      this.mediaRecorder.start();
      console.log("Start time", this.startTime);
      this.startTime = Date.now();
      const audioChunks = [];
      this.mediaRecorder.ondataavailable = e => {
        // console.log("Event data: ", e);
        audioChunks.push(e.data);
      }
      this.mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: "video/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        // const audio = new Audio(audioUrl);
        const audioPlayer = this.clipTarget.children[0];
        this.clip = audioBlob;
        console.log(this.clip);
        audioPlayer.src = audioUrl
        this.uploadTarget.click()
      });
    }
    console.log(`Recording: ${this.isRecording}`)
  }

  stop_recording() {
    // Recording but no clip saved yet
    if (this.isRecording === true && !this.clip) {

      // this.clip = "recorded clip"
      console.log("Media Recorder Stop!", this.mediaRecorder.state);
      setTimeout(() => {
        this.mediaRecorder.stop();
        this.stopTime = Date.now();
        console.log("Stop time", this.stopTime);
        this.totalMilliseconds = this.stopTime - this.startTime;
        // this.millisecondsTarget.value = this.totalMilliseconds;

        console.log("Total milliseconds: ", this.totalMilliseconds);
      }, 500);

      this.earTarget.classList.add("d-none")
      this.start_playbackTarget.classList.remove("d-none")
      this.stop_recordingTarget.classList.add("d-none")
      // // this.uploadTarget.classList.remove("d-none")
      // this.reset_playbackTarget.classList.remove("d-none")
      // this.clipTarget.classList.remove("d-none")
      this.isRecording = false;
    }
    console.log(`Recording: ${this.isRecording}`)
  }

  upload(ev) {
    const form = this.formTarget
    const clipUpload = this.clip;

    ev.preventDefault()
    const formData = new FormData(form);
    const fileName = "audio"
    console.log("Upload this clip ", clipUpload);
    formData.append('video[audio]', clipUpload, `${fileName}.webm`)
    console.log(formData.get("video[audio]"));
    // formData.append('length', this.totalMilliseconds)
    // console.log(formData.get("length"));
    console.log(formData);

    // Rails.ajax({
    //   url: form.action,
    //   type: "patch",
    //   dataType: "script",
    //   data: formData
    // })
    $("#loader").show();

    fetch(form.action, {
      method: "PATCH",
      headers: { "Accept": "application/json" },
      body: formData
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        document.getElementById("form").innerHTML = data.form
      })
      .finally(() => {
        $("#loader").hide();
      });
  }

  reset() {
    // Not recording because finished and clip save
    this.clip = null;
    console.log("Media Recorder what's happening?", this.mediaRecorder.state);
    this.start_recordingTarget.classList.remove("d-none")
    this.start_playbackTarget.classList.add("d-none")
    this.clipTarget.classList.add("d-none")
    this.reset_playbackTarget.classList.add("d-none")
    this.uploadTarget.classList.add("d-none")
  }
}
