import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header';
import myContext from '../Context/myContext'

function AssetsSell(props) {
  const { id } = useParams();
  const [assetQuantity, setAssetQuantity] = useState(0)
  const { assetChosen, setAssetChosen, balance, setBalance, availableAssets } = useContext(myContext)

  const handleChangeQuantity = ({ target }) => {
    const { value } = target
    setAssetQuantity(value)
  };

  const assetUpdatedSell = {
    id: assetChosen.id,
    name: assetChosen.name,
    company: assetChosen.company,
    quantity: parseInt(assetChosen.quantity) - parseInt(assetQuantity),
    value: assetChosen.value
  };

  const handleNewSold = (assetsBought, assetUpdatedSell) => { 
    const i = assetsBought.findIndex(item => item.id === assetUpdatedSell.id);
    if (i > -1 ) {
      assetsBought[i].quantity = parseInt(assetsBought[i].quantity) - parseInt(assetQuantity)
      if (assetsBought[i].quantity <= 0) {
        assetsBought.splice(i, 1)
      }
    }
    return assetsBought;
  }; 

  const handleClickSell = () => {
    setBalance(balance + (assetChosen.value * assetQuantity))
    localStorage.setItem('Balance', JSON.stringify((+balance) + (+assetChosen.value * (+assetQuantity))));

    setAssetChosen(assetUpdatedSell)
    localStorage.setItem('AssetChosen', JSON.stringify(assetUpdatedSell));

    availableAssets.forEach((item) => {
      if (item.id === assetUpdatedSell.id) {
        item.quantity = parseInt(item.quantity) + parseInt(assetQuantity);
      }
    });
    localStorage.setItem('AvailableAssets', JSON.stringify(availableAssets));

    let assetsBought = JSON.parse(localStorage.getItem('AssetsBought'));
    assetsBought = handleNewSold(assetsBought, assetUpdatedSell);
    localStorage.setItem('AssetsBought', JSON.stringify(assetsBought));
  };

  const handleClickNegotiation = () => {
    handleClickSell()
  };

  return(
    <div>
      <Header {...props} />
      <br />
      <br />
      <br />
      <table>
        <caption>Vender Ação: {id}</caption>
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
      <button type="button" name="sell">Vender</button>
      <input type="text" name="sell-value" placeholder="Insira o Valor" onChange={handleChangeQuantity} />
      <br />
      <br />
      <Link to='/assets'>
        <input type="button" name="back" value="Voltar" />
      </Link>
      <input type="button" name="confirm" value="Confirmar" onClick={handleClickNegotiation}/>
    </div>
  )
}

export default AssetsSell;