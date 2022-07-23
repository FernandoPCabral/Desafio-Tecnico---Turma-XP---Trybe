import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [balance, setBalance] = useState(0);
  const [accountValue, setAccountValue] = useState();
  const [methodPayment, setMethodPayment] = useState('');
  const [assetChosen, setAssetChosen] = useState([])
  const [assetsBought, setAssetsBought] = useState([])
  const [availableAssets, setAvailableAssets] = useState([])
  const stateContext = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    disabledButton,
    setDisabledButton,
    balance,
    setBalance,
    accountValue,
    setAccountValue,
    methodPayment,
    setMethodPayment,
    assetChosen,
    setAssetChosen,
    assetsBought,
    setAssetsBought,
    availableAssets,
    setAvailableAssets,
  };

  return (
    <MyContext.Provider value={ stateContext }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
