import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["user",]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }



  showDiv() {
    this.userTarget.style.display = "block"
  }

  hideDiv() {
    this.userTarget.style.display = "none"
  }

  toggleDiv() {
    if (this.userTarget.style.display === "block") {
      this.hideDiv()
    } else {
      this.showDiv()
    }
  }



}
