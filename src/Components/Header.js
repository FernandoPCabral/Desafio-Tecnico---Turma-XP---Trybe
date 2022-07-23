import React from 'react';
import getEmailLocalStorage from '../helpers/getEmailLocalStorage';
import getBalance from '../helpers/getBalance';

const Header = () => {

    return (
      <header>
        <div>
          <span>Usuário: </span>
          <span>{ getEmailLocalStorage() }</span>
          <br />
          <span>{ getBalance() ? <span>Seu Saldo: {getBalance().toFixed(2)}</span> : getBalance()}</span>
        </div>
      </header>
    )
}

export default Header;
