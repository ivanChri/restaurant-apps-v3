/* eslint-disable max-len */
/* eslint-disable new-cap */
const assert = require('assert');
Feature('remove favorite Restaurant');
Before(({I}) => {
  I.amOnPage('/#/favorite');
});
Scenario('checking that favorite restaurant list is empty', ({I}) => {
  I.seeElement('.restaurant');
  I.see('Tidak ada Item untuk ditampilkan', '.empty-favorite');
});
Scenario('remove restaurant from favorite', async ({I}) => {
  I.see('Tidak ada Item untuk ditampilkan', '.empty-favorite');
  I.amOnPage('/');
  I.seeElement('.detail-btn a');
  const firstRestaurant = locate('.detail-btn a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#addButton');
  I.click('#addButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.detail-btn a');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#removeFavorite');
  I.click('#removeFavorite');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada item untuk ditampilkan', '.empty-favorite');
});
