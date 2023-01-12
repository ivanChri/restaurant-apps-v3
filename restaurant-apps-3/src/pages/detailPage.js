/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {createDetailTemplate, createReviewsTemplate} from '../utils/template';
import {detailPageContent, postReviews} from '../utils/data-source';
import favoriteButtonPresenter from '../utils/favoriteEvent';
import favoriteRestaurant from '../utils/indexDB';
import urlParser from '../routers/urlPath';
const detailPage= {
  async render() {
    return `
        <div  class="restaurantDetail-container"></div>
        <div class='favoriteBtnContainer'></div>
    `;
  },
  async afterRender() {
    const url=urlParser.parseActiveUrlWithoutCombiner();
    const restaurant=await detailPageContent(url.id);
    const restaurantContainer=document.querySelector('.restaurantDetail-container');
    restaurantContainer.innerHTML=createDetailTemplate(restaurant);
    const reviewContainer=document.querySelector('.userReview');
    favoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('.favoriteBtnContainer'),
      favoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
    restaurant.customerReviews.forEach((review)=>{
      reviewContainer.innerHTML+=createReviewsTemplate(review);
    });
    const reviewBtn=document.querySelector('.addReview');
    reviewBtn.addEventListener('click', async ()=>{
      const newReview={
        name: document.querySelector('#name').value,
        review: document.querySelector('#review').value,
        id: url.id,
      };
      if (newReview.name==''&&newReview.review==='') {
        return alert('harap mengisikan nama dan review!!');
      } else {
        alert('terima kasih atas review anda');
        await postReviews(newReview).then(async (res)=>this.updateReview(res, reviewContainer));
        document.querySelector('#name').value='';
        document.querySelector('#review').value='';
      }
    });
  },
  async updateReview(res, container) {
    container.innerHTML+=createReviewsTemplate(res);
  },
};
export default detailPage;
