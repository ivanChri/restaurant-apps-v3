/* eslint-disable require-jsdoc */
import buttonEvent from '../utils/buttonEvent';
import urlParser from '../routers/urlPath';
import routes from '../routers/route';
function createButtonEvent({button, drawer, mainContent}) {
  buttonEvent({button, drawer, mainContent});
}
async function renderPage(mainContent) {
  const url = urlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  mainContent.innerHTML = await page.render();
  await page.afterRender();
}
export {createButtonEvent, renderPage};
