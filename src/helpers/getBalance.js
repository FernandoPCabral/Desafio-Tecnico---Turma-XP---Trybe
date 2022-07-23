const getBalance = () => {
  const balance = JSON.parse(localStorage.getItem('Balance'));
  return balance
};

export default getBalance;
