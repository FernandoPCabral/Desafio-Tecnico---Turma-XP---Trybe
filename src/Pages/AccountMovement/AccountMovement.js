import React from 'react';
import BalanceMovement from '../../Components/BalanceMovement/BalanceMovement';
import Header from '../../Components/Header';

function AccountMovement(props) {
  return(
    <div>
      <Header {...props} />
      <BalanceMovement {...props} />
    </div>
  )
}

export default AccountMovement;
