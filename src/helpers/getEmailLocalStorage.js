const getEmailLocalStorage = () => {
  const userLocalStorage = JSON.parse(localStorage.getItem('User'));
  if (!userLocalStorage) {
    return '';
  }
  return userLocalStorage;
};

export default getEmailLocalStorage;
