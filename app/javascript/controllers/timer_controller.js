import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="timer"
export default class extends Controller {
  connect() {
    this.startTime = new Date();
    this.timerElement = this.element;
    this.updateTimer();
  }

  updateTimer() {
    setInterval(() => {
      const currentTime = new Date();
      const elapsedTime = Math.floor((currentTime - this.startTime) / 1000);

      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;

      // Format minutes and seconds with leading zeros
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      this.timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
  }


}
