
const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, contact) => {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  data.push(contact);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = (key, phone) => {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  const index = data.findIndex(el => el['phone'] === phone);
  data.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(data));
};

export {
  getStorage,
  setStorage,
  removeStorage,
};
