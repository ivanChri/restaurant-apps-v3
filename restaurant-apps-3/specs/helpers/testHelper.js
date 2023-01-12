import favoriteButtonPresenter from '../../src/utils/favoriteEvent';
import favoriteRestaurant from '../../src/utils/indexDB';
const createFavoriteButtonPresenter = async (restaurant) => {
  await favoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteBtnContainer'),
    favoriteRestaurant,
    restaurant,
  });
};
export {createFavoriteButtonPresenter};
