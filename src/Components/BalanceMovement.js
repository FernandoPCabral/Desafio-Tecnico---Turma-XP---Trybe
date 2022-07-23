import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import myContext from '../Context/myContext'

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
    if (methodPayment === 'Depósito') {
      setBalance((+accountValue) + (+balance));
      localStorage.setItem('Balance', JSON.stringify((+accountValue) + (+balance)));
    }
    else if (methodPayment === 'Retirada') {
      setBalance((+balance) - (+accountValue));
      localStorage.setItem('Balance', JSON.stringify((+balance) - (+accountValue)));
    }
  };

  useEffect(() => {
    const balanceLocalStorage = JSON.parse(localStorage.getItem('Balance'));
  if (!balanceLocalStorage) {
    setBalance(0);
  }
  setBalance(balanceLocalStorage)
  })

  return (
    <div>
      <span>{ balance ? <span>Saldo em conta: {balance.toFixed(2)}</span> : balance}</span>
      <br />
      <br />
      <input type="button" name="deposit" value="Depósito" onClick={handleClickMethodPayment} />
      <input type="button" name="withdraw" value="Retirada" onClick={handleClickMethodPayment} />
      <br />
      <br />
      <input
        type="number"
        name="moneyInput"
        placeholder="Digite o Valor"
        step=".01"
        min="0"
        value={accountValue}
        onChange={handleChangeAccountValue}
      />
      <br />
      <br />
      <Link to='/assets'>
        <input type="button" name="back" value="Voltar" />
      </Link>
      <input type="button" name="confirm" value="Confirmar" onClick={handleClickAccount} />
    </div>
  )
}

export default BalanceMovement;
