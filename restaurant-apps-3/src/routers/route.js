import homePage from '../pages/homePage';
import favoritePage from '../pages/favoritePage';
import detailPage from '../pages/detailPage';
const routes = {
  '/': homePage,
  '/home': homePage,
  '/favorite': favoritePage,
  '/detail/:id': detailPage,
};

export default routes;
