/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
function buttonEvent({button, drawer, mainContent}) {
  button.addEventListener('click', (event)=>{
    toggleDrawer(event, drawer);
  });
  mainContent.addEventListener('click', (event)=>{
    removeDrawer(event, drawer);
  });
};
function toggleDrawer(event, drawer) {
  event.stopPropagation();
  return drawer.classList.toggle('open');
};
function removeDrawer(event, drawer) {
  event.stopPropagation();
  drawer.classList.remove('open');
};
export default buttonEvent;
