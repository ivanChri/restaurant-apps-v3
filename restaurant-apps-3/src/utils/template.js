/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
const restaurantImg=(id)=>{
  return `https://restaurant-api.dicoding.dev/images/medium/${id}`;
};
function createRestaurantTemplate(restaurant) {
  return `
  <div class="restaurant-item" tabindex="0" aria-label="${restaurant.name}">
  <div class="restaurant-item__header">
  <img class="lazyload restaurant-item__header__poster img" tabindex="0" aria-label="gambar restaurant" data-src="${restaurantImg(restaurant.pictureId)}" alt="${restaurant.name}" width="100%">
  <div class="restaurant-item__header__rating">
      <p>Rating: <span class="restaurant-item__header__rating__score rating">${restaurant.rating}</span></p>
   </div>
  </div>
  <div class="restaurant-item__content">
    <h3 class="title">${restaurant.name}</h3>
    <h3 class="detail-btn"><a href="/#/detail/${restaurant.id}">lihat detail</a></h3>
  </div>
  </div>
`;
}
function createReviewsTemplate(review) {
  return `<div class='reviewContent' tabindex='0'>
   <h5>${review.name}</h5>
   <p>${review.review}</P>
  </div>`;
}
function createDetailTemplate(restaurant) {
  return `<h2 class="restaurant__title" tabindex='0'>${restaurant.name}</h2>
  <img class='content-img lazyload' data-src="${restaurantImg(restaurant.pictureId)}" width='100%' alt="${restaurant.name}" tabindex='0' />
  <div class=".restaurant__info" tabindex='0' aria-label='informasi restaurant'>
    <h3>Information</h3>
    <h4 tabindex='0'>Rating</h4>
    <p tabindex='0'>${restaurant.rating}</p>
    <h4 tabindex='0'>Lokasi</h4>
    <p tabindex='0'>${restaurant.address}, ${restaurant.city}</p>
    <h4 tabindex='0'>kategori</h4>
    <p tabindex='0'>${restaurant.categories.map((name)=>name.name).join('-')}<p>
    <div class='menu' tabindex='0' aria-label='menu restaurant'>
    <h4>Menu</h4>
    <h5 tabindex='0'>Makanan</h5>
    <p tabindex='0'>${restaurant.menus.foods.map((food)=>food.name).join(',')}
    <h5 tabindex='0'>Minuman</h5>
    <p tabindex='0'>${restaurant.menus.drinks.map((drink)=>drink.name).join(',')}
    </div>
  </div>
  <div class="restaurant__overview" tabindex='0'>
    <h3>Tentang restaurant</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class='reviewContainer' tabindex='0' aria-label='user review'>
   <h3>review</h3>
    <div class='userReview'></div>
  </div>
  <div class='addNewReview' tabindex='0' aria-label='tambahkan review'>
  <h3>Tambahkan Review</h3>
  <form>
  <label for="nama">nama</label><br>
  <input type="text" id="name" name="name" aria-label='masukan nama anda'><br>
  <label for="review">review:</label><br>
  <textarea id="review" name="review" aria-label='tuliskan review anda'>
</textarea>
</form>
<button class='addReview btn' aria-label='submit review'>submit</button>
  </div>
`;
}
function createAddFavoriteBtnTemplate() {
  return `<button aria-label="tambahkan ke favorite" id="addButton" class="btn">
    tambahkan ke favorite
  </button>`;
}
function createRemoveFavoriteBtnTemplate() {
  return `<button aria-label="hapus dari favorite" id="removeButton" class="btn">
  hapus dari favorite
</button>`;
}
export {restaurantImg, createRestaurantTemplate, createDetailTemplate, createAddFavoriteBtnTemplate, createRemoveFavoriteBtnTemplate, createReviewsTemplate};
