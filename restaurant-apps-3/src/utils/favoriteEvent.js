/* eslint-disable max-len */
import {createAddFavoriteBtnTemplate, createRemoveFavoriteBtnTemplate} from './template';
const favoriteButtonPresenter = {
  async init({favoriteButtonContainer, favoriteRestaurant, restaurant}) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant= favoriteRestaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._checkRestaurant(id)) {
      this._renderRemoveFavorite();
    } else {
      this._renderAddFavorite();
    }
  },

  async _checkRestaurant(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderAddFavorite() {
    this._favoriteButtonContainer.innerHTML = createAddFavoriteBtnTemplate();
    const favButton = document.querySelector('#addButton');
    favButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      return this._renderButton();
    });
  },

  _renderRemoveFavorite() {
    this._favoriteButtonContainer.innerHTML = createRemoveFavoriteBtnTemplate();
    const favButton = document.querySelector('#removeButton');
    favButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      return this._renderButton();
    });
  },
};

export default favoriteButtonPresenter;
