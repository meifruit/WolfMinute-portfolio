import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="copy"
export default class extends Controller {
static targets = ["text"]

  connect() {
  }

  copyToClipboard(event) {
    let text = ""
    this.textTargets.forEach((p) => {
      text = text + p.textContent + " "

    })
    event.currentTarget.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    navigator.clipboard.writeText(text)
  }
}
