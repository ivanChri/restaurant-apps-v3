/* eslint-disable new-cap */
import {FavoriteRestaurantModel} from './favoriteRestaurantContract';
import favoriteRestaurant from '../../src/utils/indexDB';

describe('Favorite restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurant.getAllFavorite()).forEach(async (restaurant) => {
      await favoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });
  FavoriteRestaurantModel(favoriteRestaurant);
});
