/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
async function homePageContent() {
  const restaurantData=await fetch(`https://restaurant-api.dicoding.dev/list`);
  const response=await restaurantData.json();
  return await response.restaurants;
};
async function detailPageContent(id) {
  const restaurantDetailData=await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
  const response=await restaurantDetailData.json();
  return await response.restaurant;
};
async function postReviews(data) {
  const postReview=await fetch(`https://restaurant-api.dicoding.dev/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const review=await postReview.json();
  return data;
}
export {homePageContent, detailPageContent, postReviews};
