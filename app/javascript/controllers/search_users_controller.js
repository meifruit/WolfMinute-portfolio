import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "form", "users", "usersClicked"];

  connect() {}

  search() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then((response) => response.text())
      .then((data) => {
        const userList = this.usersTarget;
        const existingUsers = this.usersClickedTarget;
        if (data.trim().length > 0) {
          userList.innerHTML = data;
          existingUsers.classList.remove("hidden");
        } else {
          userList.innerHTML = "<p>No users found.</p>";
          existingUsers.classList.add("hidden");
        }
      });
  }

  addUser(event) {
    const user = event.target.dataset.user;
    const usersClicked = this.usersClickedTarget;
    const newUser = document.createElement("div");
    newUser.textContent = user;
    usersClicked.appendChild(newUser);
  }
}
