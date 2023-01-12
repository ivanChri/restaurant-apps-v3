/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import favoriteRestaurant from '../src/utils/indexDB';
import * as testHelper from './helpers/testHelper';

describe('Add favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteBtnContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });
  it('should show the add favorite button when the restaurant has not added to favorite before', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    expect(document.querySelector('[aria-label="tambahkan ke favorite"]')).toBeTruthy();
  });
  it('should not show the remove favorite button when the restaurant has not been added to favorite before', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    expect(document.querySelector('[aria-label="hapus dari favorite"]')).toBeFalsy();
  });
  it('should be able to like the movie', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    document.querySelector('#addButton').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({id: 1});
    favoriteRestaurant.deleteRestaurant(1);
  });
  it('should not add a restaurant again when its already added to favorite', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    await favoriteRestaurant.putRestaurant({id: 1});
    document.querySelector('#addButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurant.getAllFavorite()).toEqual([{id: 1}]);
    favoriteRestaurant.deleteRestaurant(1);
  });
  it('should not add a restaurant when it has no id', async () => {
    await testHelper.createFavoriteButtonPresenter({});
    document.querySelector('#addButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurant.getAllFavorite()).toEqual([]);
  });
});
