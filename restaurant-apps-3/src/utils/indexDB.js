import {openDB} from 'idb';
const databaseConfig={
  databaseName: 'favorite-restaurant-database',
  databaseVersion: 1,
  objectStoreName: 'favorite-restaurant',
};
const {databaseName, databaseVersion, objectStoreName}=databaseConfig;
const openDataBase=openDB(databaseName, databaseVersion, {
  upgrade(database) {
    database.createObjectStore(objectStoreName, {keyPath: 'id'});
  },
});
const favoriteRestaurant= {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await openDataBase).get(objectStoreName, id);
  },
  async getAllFavorite() {
    return (await openDataBase).getAll(objectStoreName);
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await openDataBase).put(objectStoreName, restaurant);
  },
  async deleteRestaurant(id) {
    return (await openDataBase).delete(objectStoreName, id);
  },
};

export default favoriteRestaurant;
