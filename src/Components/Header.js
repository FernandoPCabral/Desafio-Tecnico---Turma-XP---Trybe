import React from 'react';
import getEmailLocalStorage from '../helpers/getEmailLocalStorage';
import getBalance from '../helpers/getBalance';
import { HeaderStyle } from './shared/HeaderStyle'

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
      <HeaderStyle>
        <div>
          <span>{showBalance()}</span>
          <span>PocketStock</span>
          <div>
            <span>Usuário: </span>
            <span>{ getEmailLocalStorage() }</span>
          </div>
        </div>
      </HeaderStyle>
    )
}

export default Header;
