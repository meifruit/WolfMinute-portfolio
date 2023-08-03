import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-steps"
export default class extends Controller {
  static targets = ["step", "spinner","description", "startTime", "location", "duration", "gptResult", "checkbox", "endTime", "gptTimeResult"];

  connect() {
    this.currentStep = 0;
    this.showCurrentStep();
  }

  nextStep() {
    this.currentStep++;
    this.showCurrentStep();
  }
  nextStep2(event) {
    this.users_names = []
    this.checkboxTargets.forEach((checkbox) => {
      if (checkbox.checked) {
        this.users_names.push(checkbox.value)

        console.log(this.users_names)
        // this.fetchNextAvailableTime(this.users_names)
      }
    });
    this.currentStep++;
    this.showCurrentStep();
  }

  // fetchNextAvailableTime(users_names) {
  //   const url = `/meetings/new?usersnames=${users_names}`
  //   fetch(url, { headers: { "Accept": "text/plain", method: "get" } })
  //     .then((response) => response.text())
  //     .then((data) => {
  //       console.log(data)
  //       this.availabletimeTarget.innerHTML = data;
  //     })
  //     .catch((error) => {
  //       console.error(error)});
  // }

  showCurrentStep() {
    this.stepTargets.forEach((step, index) => {
      if (index === this.currentStep) {
        step.classList.remove('hidden');
      }
    });
  }

  fetchMeetingInfo() {
    const description = encodeURIComponent(this.descriptionTarget.value);
    const url = `/meetings/new?description=${description}&usersnames=${this.users_names}`;
    $("#loader").show();
    fetch(url, { headers: { "Accept": "text/plain", method: "get" } })
      .then((response) => response.text())
      .then((data) => {
        this.gptTimeResultTarget.innerHTML = data;
        console.log(typeof data, data,  this.gptTimeResultTarget)
      })
      .catch((error) => {
        console.error(error)})
      .finally(() => {
        $("#loader").hide(); // Hide loader after the request completes (success or failure)
      });
  }
}
