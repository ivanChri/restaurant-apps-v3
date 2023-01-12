import favoriteRestaurant from '../utils/indexDB';
import {createRestaurantTemplate} from '../utils/template';
const favoritePage= {
  async render() {
    return `
      <div class='restaurant'>
      </div>
      <p class="empty-favorite">Tidak ada Item untuk ditampilkan</p>
    `;
  },

  async afterRender() {
    const favoriteContainer=document.querySelector('.restaurant');
    const favRestaurant=await favoriteRestaurant.getAllFavorite();
    favRestaurant.forEach((restaurant)=>{
      document.querySelector('.empty-favorite').setAttribute('hidden', true);
      favoriteContainer.innerHTML+=createRestaurantTemplate(restaurant);
    });
  },
};

export default favoritePage;
