// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import "@vonage/vivid"
import "./components/header";
import "./components/toolbar";
import "./time_progress"

// function countdown () {
//   const progressEl = document.getElementById("progress")
//   let remainingTime = 60;
//   const totalTime = remainingTime;
//   if (remainingTime > 0 ) {
//     const progress = ((totalTime - remainingTime) / totalTime) * 100;
//     progressEl.style.width = `${progress}%`;
//     remainingTime--;
//     setTimeout(countdown, 1000);
//   } else {
//     progressEl.style.width = "100%";
//   }
// }

// countdown()
