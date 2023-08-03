// Start of Toolbar Code

// toggle hide/display of buttons
let toggleButtonView = (buttonToHide, buttonToShow) => {
  buttonToHide.style.display = "none";
  buttonToShow.style.display = "block";
}

// toggle Mute All / Unmute All
let toggleMuteAllButton = (button, state, participants) => {
  button.addEventListener("click", function () {
    Object.entries(participants).forEach(participant => {
      if (state === "mute") {
        toggleButtonView(mute_all_btn, unmute_all_btn)
        // why need both here???
        participant[1].camera.disableAudio();
      } else if (state === "unmute") {
        toggleButtonView(unmute_all_btn, mute_all_btn)
        participant[1].camera.enableAudio();
      } else {
        console.log("Error in toggleMuteAll")
      }
    })
  })
}



// toggle button (display and functionality) of any audio and video input devices
let toggleInputButton = (condition, defaultBtn, altBtn, action) => {
  if (condition()) {
    toggleButtonView(defaultBtn, altBtn);
    action();
  } else if (!condition()) {
    toggleButtonView(altBtn, defaultBtn);
    action();
  } else {
    console.log(`Error in toggleInputButton. Condition: ${condition}`);
  }
}

// listen for clicks to trigger toggle of input buttons
let listenForToggle = (condition, defaultBtn, altBtn, defaultAction, altAction) => {
  defaultBtn.addEventListener("click", function () {
    toggleInputButton(condition, defaultBtn, altBtn, defaultAction)
  })
  altBtn.addEventListener("click", function () {
    toggleInputButton(condition, defaultBtn, altBtn, altAction)
  })
}

// Retrieve available input devices from VideoExpress
// Add retrieved input devices to select options
async function getDeviceInputs(audioTarget, videoTarget) {
  const audio = document.querySelector(`${audioTarget}`);
  const video = document.querySelector(`${videoTarget}`);
  const availableDevices = VideoExpress.getDevices();
  availableDevices.then(devices => {
    devices.forEach(device => {
      if (device.kind === "audioInput") {
        let opt = document.createElement('vwc-list-item');
        opt.value = device.deviceId;
        opt.innerHTML = device.label;
        audio.appendChild(opt);
      }
      else if (device.kind === "videoInput") {
        let opt = document.createElement('vwc-list-item');
        opt.value = device.deviceId;
        opt.innerHTML = device.label;
        video.appendChild(opt);
      }
      else {
        console.log("Error in retrieveDevices");
      }
    })
  })
}


// listen for changes to selected audio/video inputs
// update room when inputs are changed
let listenInputChange = (target) => {
  const targetSelect = document.querySelector(`${target}`);
  targetSelect.addEventListener('change', (inputOption) => {
    if (target === "vwc-select#audio-input") {
      room.camera.setAudioDevice(inputOption.target.value);
    }
    else if (target === "vwc-select#video-input") {
      room.camera.setVideoDevice(inputOption.target.value);
    }
    else {
      console.log("Error in listenInputChange");
    }
  })
}


// Retrieve lists of auidoOutput
// Add audioOutputs to select menu
// On user select new option, update audio input
async function audioOutputs() {
  var audioOutputs = await VideoExpress.getAudioOutputDevices();
  const audioOutputSelect = document.querySelector('vwc-select#audio-output');
  audioOutputs.forEach(output => {
    let opt = document.createElement('vwc-list-item');
    opt.value = output.deviceId;
    opt.innerHTML = output.label;
    audioOutputSelect.appendChild(opt);
  })

  audioOutputSelect.addEventListener('change', (audioOutputOption) => {
    VideoExpress.setAudioOutputDevice(audioOutputOption.target.value);
  });
}


// toggle tooltips on hover
let addToolTipListeners = (toolTipsToListen) => {
  toolTipsToListen.forEach(toolTipToListen => {
    const target = document.querySelector(`#${toolTipToListen.targetId}`);
    const targetToolTip = document.querySelector(`#${toolTipToListen.toolTipId}`);
    target.addEventListener('mouseover', (event) => targetToolTip.open = !targetToolTip.open);
    target.addEventListener('mouseout', (event) => targetToolTip.open = !targetToolTip.open);
  })
}


// define all our DOM elements which we'll want to listen to
const mute_all_btn = document.querySelector('#mute-all');
const unmute_all_btn = document.querySelector('#unmute-all');

const mute_self_btn = document.querySelector('#mute-self');
const unmute_self_btn = document.querySelector('#unmute-self');

const hide_self_btn = document.querySelector('#hide-self');
const unhide_self_btn = document.querySelector('#unhide-self');

const toolTipsToListen = [
  { targetId: "hide-self", toolTipId: "hide-self-tooltip" },
  { targetId: "unhide-self", toolTipId: "unhide-self-tooltip" },
  { targetId: "mute-self", toolTipId: "mute-self-tooltip" },
  { targetId: "unmute-self", toolTipId: "unmute-self-tooltip" },
  { targetId: "mute-all", toolTipId: "mute-all-tooltip" },
  { targetId: "unmute-all", toolTipId: "unmute-all-tooltip" },
  { targetId: "audio-output-target", toolTipId: "audio-output-tooltip" },
]


// Call all of our functions!
// if (mute_all_btn) {

// }
// if (unmute_all_btn) {

// }
if (typeof room !== "undefined") {
  console.log(room)
  toggleMuteAllButton(unmute_all_btn, "unmute", room.participants);
  toggleMuteAllButton(mute_all_btn, "mute", room.participants);
  listenForToggle(room.camera.isVideoEnabled, hide_self_btn, unhide_self_btn, room.camera.disableVideo, room.camera.enableVideo);
  listenForToggle(room.camera.isAudioEnabled, mute_self_btn, unmute_self_btn, room.camera.disableAudio, room.camera.enableAudio);
  getDeviceInputs("vwc-select#audio-input", "vwc-select#video-input");
  listenInputChange("vwc-select#audio-input");
  listenInputChange("vwc-select#video-input");
  audioOutputs();
  addToolTipListeners(toolTipsToListen);
}
