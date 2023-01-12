/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import favoriteRestaurant from '../src/utils/indexDB';
import * as testHelper from './helpers/testHelper';
const addFavoriteButtonContainer = () =>{
  document.body.innerHTML = '<div id="favoriteBtnContainer"></div>';
};
describe('remove favorite restaurant', ()=>{
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await favoriteRestaurant.putRestaurant({id: 1});
  });
  afterEach(async () => {
    await favoriteRestaurant.deleteRestaurant(1);
  });
  it('should display removeFavorite button when the restaurant has been added to favorite', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    expect(document.querySelector('[aria-label="hapus dari favorite"]'))
        .toBeTruthy();
  });
  it('should not display addFavorite button when the restaurant has been added to favorite', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    expect(document.querySelector('[aria-label="tambahkan ke favorite"]'))
        .toBeFalsy();
  });
  it('should be able to remove favorite restaurant from the list', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    document.querySelector('[aria-label="hapus dari favorite"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurant.getAllFavorite()).toEqual([]);
  });
  it('should not throw error if the unfavorite restaurant is not in the list', async () => {
    await testHelper.createFavoriteButtonPresenter({id: 1});
    await favoriteRestaurant.deleteRestaurant(1);
    document.querySelector('[aria-label="hapus dari favorite"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurant.getAllFavorite()).toEqual([]);
  });
});
