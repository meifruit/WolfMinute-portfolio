// app/assets/javascripts/time_progress.js

// document.addEventListener('DOMContentLoaded', () => {
//   const progressBar = document.querySelector('.time-progress-bar');
//   const durationInMinutes = parseInt(progressBar.dataset.duration);
//   const durationInMillis = durationInMinutes * 60 * 1000; // Convert minutes to milliseconds
//   const startTime = Date.now();

//   const updateProgressBar = () => {
//     const elapsedTime = Date.now() - startTime;
//     const progress = (elapsedTime / durationInMillis) * 100;
//     progressBar.style.width = `${progress}%`;

//     if (progress < 100) {
//       requestAnimationFrame(updateProgressBar);
//     }
//   };

//   updateProgressBar();
// });
