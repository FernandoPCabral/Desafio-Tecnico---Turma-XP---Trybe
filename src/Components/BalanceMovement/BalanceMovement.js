import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext'
import * as S from './styles'

function BalanceMovement(props) {
  const { balance, setBalance, methodPayment, setMethodPayment, accountValue, setAccountValue } = useContext(myContext);

  const handleChangeAccountValue = ({ target }) => {
    setAccountValue(target.value)
  };

  const handleClickMethodPayment = ({ target }) => {
    const { value } = target
    setMethodPayment(value)
  }

  const handleClickAccount = async () => {
    if (!methodPayment) {
      alert('É necessário escolher um método de Transação')
    }
    if (methodPayment === 'Depósito') {
      setBalance((+accountValue) + (+balance));
      localStorage.setItem('Balance', JSON.stringify((+accountValue) + (+balance)));
    }
    else if (methodPayment === 'Retirada') {
      if (balance - accountValue < 0 ) {
        alert('Valor de retirada excede o atual saldo')
        document.querySelector('#confirm-button').preventDefault();
      }
      setBalance((+balance) - (+accountValue));
      localStorage.setItem('Balance', JSON.stringify((+balance) - (+accountValue)));
    }
  };

  useEffect(() => {
    const balanceLocalStorage = JSON.parse(localStorage.getItem('Balance'));
  if (!balanceLocalStorage) {
    setBalance();
  }
  setBalance(balanceLocalStorage)
  })

  return (
    <S.Content>
      { balance ? <span>Saldo em Conta: {balance.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span> : <span>Saldo em conta: {balance.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span> }
      <S.ContainerOne>
        <input type="button" name="deposit" value="Depósito" onClick={handleClickMethodPayment} />
        <input type="button" name="withdraw" value="Retirada" onClick={handleClickMethodPayment} />
      </S.ContainerOne>
      <S.Input
        type="number"
        name="moneyInput"
        placeholder="Digite o Valor"
        step=".01"
        min="0"
        value={accountValue}
        onChange={handleChangeAccountValue}
      />
      <S.ContainerTwo>
        <Link to='/assets'>
          <button type="button" name="back">Retornar</button>
        </Link>
        <button type="button" name="confirm" id="confirm-button" onClick={handleClickAccount}>Confirmar</button>
      </S.ContainerTwo>
    </S.Content>
  )
}

export default BalanceMovement;
