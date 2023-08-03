
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["month", "week" ,"meetings","title"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  weekly() {
   this.monthTarget.classList.add("hidden")
   this.weekTarget.classList.remove("hidden")
  }

  monthly() {
    this.monthTarget.classList.remove("hidden")
   this.weekTarget.classList.add("hidden")
  }

  show() {
    this.meetingsTarget.style.display = "block"
  }

  hide() {
    this.meetingsTarget.style.display = "none"
  }

  toggle() {
    if (this.meetingsTarget.style.display === "block") {
      this.hide()
    } else {
      this.show()
    }
  }



}
