import * as storage from './serviceStorage.js';

const STORAGE_KEY = 'phoneBook';

const getContactsData = () => storage.getStorage(STORAGE_KEY);

const addContactData = (contact) => {
  storage.setStorage(STORAGE_KEY, contact);
};

const removeContactData = (phone) => {
  storage.removeStorage(STORAGE_KEY, phone);
};

export default {
  getContactsData,
  addContactData,
  removeContactData,
};
