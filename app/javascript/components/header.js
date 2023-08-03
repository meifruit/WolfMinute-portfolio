const switch_btn = document.querySelector('vwc-switch');
const layoutContainer = document.querySelector('#layoutContainerWrapper');
const screenShare = document.createElement('div');
const layoutContainerWrapper = document.querySelector('#layoutContainerWrapper');
const mode_name = document.querySelector('#mode-name');

let addModeratorCustomStyles = (layoutContainer, screenShare, layoutContainerWrapper, mode_name) => {
  mode_name.innerHTML = "Watch Mode";
  layoutContainerWrapper.firstElementChild.classList.add("moderator-screenshare");
  layoutContainerWrapper.classList.add("moderator-screenshare");
  screenShare.setAttribute("id", "screenSharingContainer");
  layoutContainer.appendChild(screenShare);
}

let removeModeratorCustomStyles = (layoutContainer, screenShare, layoutContainerWrapper, mode_name) => {
  mode_name.innerHTML = "Chill Mode";
  layoutContainerWrapper.firstElementChild.classList.remove("moderator-screenshare");
  layoutContainerWrapper.classList.remove("moderator-screenshare");
  screenShare.removeAttribute("id");
  layoutContainer.removeChild(layoutContainer.lastChild);
}

if (switch_btn !== null) {
  switch_btn.addEventListener('change', (event) => {
    if (event.target.checked) {
      addModeratorCustomStyles(layoutContainer, screenShare, layoutContainerWrapper, mode_name);
      room.startScreensharing('screenSharingContainer');
    } else if (!event.target.checked) {
      room.stopScreensharing('screenSharingContainer');
      removeModeratorCustomStyles(layoutContainer, screenShare, layoutContainerWrapper, mode_name);
    } else {
      console.log("Error in Switch Button Listener");
    }
  });
}
