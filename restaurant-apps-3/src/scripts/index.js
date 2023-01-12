import 'regenerator-runtime';
import '../styles/style.css';
import swRegister from '../utils/sw-register';
import {createButtonEvent, renderPage} from './app';
window.addEventListener('hashchange', () => {
  renderPage(document.querySelector('#mainContent'));
});
window.addEventListener('load', () => {
  renderPage(document.querySelector('#mainContent'));
  createButtonEvent({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    mainContent: document.querySelector('#mainContent'),
  });
  swRegister();
});
const skipLink=document.querySelector('.skip-link');
skipLink.addEventListener('keypress', (event)=>{
  if (event.key==='Enter') {
    event.preventDefault();
    document.querySelector('#mainContent').focus();
  }
});
