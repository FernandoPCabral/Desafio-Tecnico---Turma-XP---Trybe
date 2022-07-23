import React from 'react';
import BalanceMovement from '../Components/BalanceMovement';
import Header from '../Components/Header';

function AccountMovement(props) {
  return(
    <div>
      <Header {...props} />
      <br />
      <BalanceMovement {...props} />
    </div>
  )
}

export default AccountMovement;
