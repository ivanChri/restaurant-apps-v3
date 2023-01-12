/* eslint-disable new-cap */
const assert = require('assert');
Feature('Add favorite restaurant');
Before(({I}) => {
  I.amOnPage('/#/favorite');
});
Scenario('checking that the list is empty', ({I}) => {
  I.seeElement('.empty-favorite');
});
Scenario('add restaurant to favorite', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('.detail-btn a');
  const firstRestaurant = locate('.detail-btn a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(1);
  I.click(firstRestaurant);
  I.seeElement('#addButton');
  I.wait(1);
  I.click('#addButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.detail-btn a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
