
import ReadMore from 'stimulus-read-more';

export default class extends ReadMore {
  connect() {
    super.connect();
    console.log("ReadMore controller connected");
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
