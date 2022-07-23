import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header';
import myContext from '../Context/myContext'

function AssetsBuy(props) {
  const { id } = useParams();
  const [assetQuantity, setAssetQuantity] = useState(0)
  const { assetChosen, setAssetChosen, balance, setBalance, availableAssets } = useContext(myContext)

  const handleChangeQuantity = ({ target }) => {
    const { value } = target
    setAssetQuantity(value)
  };

  const assetLocalStorage = {
    id: assetChosen.id,
    name: assetChosen.name,
    company: assetChosen.company,
    quantity: assetQuantity,
    value: assetChosen.value
  };

  const assetUpdatedBuy = {
    id: assetChosen.id,
    name: assetChosen.name,
    company: assetChosen.company,
    quantity: assetChosen.quantity - assetQuantity,
    value: assetChosen.value
  };

  const handleNewBought = (assetsBought, assetUpdatedBuy) => {
    if (assetsBought !== null) {
      const i = assetsBought.findIndex(item => item.id === assetUpdatedBuy.id);
      if (i > -1) {
        assetsBought[i].quantity = parseInt(assetsBought[i].quantity) + parseInt(assetQuantity)
      } else {
        assetsBought.push(assetLocalStorage);
      }
    } else {
      assetsBought = [assetLocalStorage]
    }
    return assetsBought;
  };

  const handleClickBuy = () => {
    let assetsBought = JSON.parse(localStorage.getItem('AssetsBought'));
    assetsBought = handleNewBought(assetsBought, assetUpdatedBuy);
    // verificar se o valor compravo não ultrapassa o valor de balance
    setBalance(balance - (assetChosen.value * assetQuantity));
    localStorage.setItem('Balance', JSON.stringify((+balance) - (+assetChosen.value * (+assetQuantity))));

    setAssetChosen(assetUpdatedBuy);
    localStorage.setItem('AssetChosen', JSON.stringify(assetUpdatedBuy));

    availableAssets.forEach((item) => {
      if (item.id === assetUpdatedBuy.id) {
        item.quantity = assetUpdatedBuy.quantity
      }
    });
    localStorage.setItem('AvailableAssets', JSON.stringify(availableAssets));
    localStorage.setItem('AssetsBought', JSON.stringify(assetsBought));
  };

  const balanceAlert = () => {
    alert('Você não possui saldo suficiente para esta transação. Por favor, volte a página da sua conta pessoal e realize um depósito')
    document.querySelector('confirm-button').preventDefault();
  }

  const handleClickNegotiation = () => {
    if (balance >= (assetChosen.value * assetQuantity)) {
      handleClickBuy()
    } else {
      balanceAlert();
    }
  };

  return(
    <div>
      <Header {...props} />
      <br />
      <br />
      <br />
      <table>
        <caption>Comprar Ação: {id}</caption>
        <thead>
          <tr>
            <td>Ação</td>
            <td>Empresa</td>
            <td>Quantidade</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{assetChosen.name}</td>
            <td>{assetChosen.company}</td>
            <td>{assetChosen.quantity}</td>
            <td>{assetChosen.value}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <button type="button" name="buy">Comprar</button>
      <input type="text" name="buy-value" placeholder="Insira o Valor" onChange={handleChangeQuantity} />
      <br />
      <br />
      <Link to='/assets'>
        <input type="button" name="back" value="Voltar" />
      </Link>
      <input type="button" id="confirm-button" name="confirm" value="Confirmar" onClick={handleClickNegotiation}/>
    </div>
  )
}

export default AssetsBuy;
