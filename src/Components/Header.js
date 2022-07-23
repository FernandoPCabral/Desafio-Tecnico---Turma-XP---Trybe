import React from 'react';
import getEmailLocalStorage from '../helpers/getEmailLocalStorage';
import getBalance from '../helpers/getBalance';

const Header = (props) => {
  const { history } = props
  const { location } = history
  const { pathname } = location

  const showBalance = () => {
    if (pathname === '/account') {
      return null
    } else {
      return <span>Seu Saldo: {getBalance().toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
    }
  }

    return (
      <header>
        <div>
          <span>Usuário: </span>
          <span>{ getEmailLocalStorage() }</span>
          <br />
          <span>{showBalance()}</span>
        </div>
      </header>
    )
}

export default Header;
//var f2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2}).replace(".", ",");