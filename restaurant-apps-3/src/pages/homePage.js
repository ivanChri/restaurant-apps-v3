/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {createRestaurantTemplate} from '../utils/template';
import {homePageContent} from '../utils/data-source';
const homePage = {
  async render() {
    return `
    <div class="content">
    <div class="img-con">
    <picture class="content-img">
    <source media="(max-width: 600px)" srcset="./images/img1-small.jpg" width="100%">
    <img src="./images/img1-large.jpg" alt="hero poster" width="100%">
  </picture>
   </div>
      <h2 class="content-title">Mau Makan Dimana Hari Ini?</h2>
      <div  class="restaurant">
       </div>
    </div>
    `;
  },

  async afterRender() {
    const content=await homePageContent();
    const restaurantContainer=document.querySelector('.restaurant');
    content.forEach((restaurant)=>{
      restaurantContainer.innerHTML+=createRestaurantTemplate(restaurant);
    });
  },
};

export default homePage;
