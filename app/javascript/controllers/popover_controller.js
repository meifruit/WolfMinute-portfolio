import Popover from "stimulus-popover";

// Connects to data-controller="popover"
export default class extends Popover {
  connect() {
    super.connect();
    console.log("Popover controller connected");
  }
  /**
   * Remove card from DOM when disconnected
   */
  disconnect() {
    super.disconnect();
    // Remove card from DOM <div data-popover-target="card">
    this.cardTarget.remove();

  }
}
