import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static values = { meetingId: Number }
  static targets = ["messages"]

  connect() {
    console.log(`Subscribe to the chatroom with the id ${this.meetingIdValue}.`)

    createConsumer().subscriptions.create(
      { channel: "MeetingChannel", id: this.meetingIdValue },
      { received: data => this.#insertMessageAndScrollDown(data) }
    )
  }
  #insertMessageAndScrollDown(data) {
    this.messagesTarget.insertAdjacentHTML("beforeend", data)
    this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
  }
}
