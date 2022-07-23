import React, { useEffect, useContext } from 'react';
import myContext from '../Context/myContext'

function MyAssets(props) {
  const { assetsBought, setAssetsBought, setAssetChosen } = useContext(myContext)

  const handleClickPage = (asset) => {
    const { history } = props
    setAssetChosen(asset);
    localStorage.setItem('AssetChosen', JSON.stringify(asset));
    history.push(`/assets/sell/${asset.id}`)
  }

  useEffect(() => {
    setAssetsBought(JSON.parse(localStorage.getItem('AssetsBought')))
  }, [setAssetsBought])

  return(
    <table>
      <caption>Minhas Ações</caption>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Empresa</th>
          <th>Quantidade</th>
          <th>Valor em Reais</th>
          <th>Negociar</th>
        </tr>
      </thead>
      <tbody>
        {assetsBought && assetsBought.map((asset) => (
          <tr key={ asset.id }>
            <td>{asset.name}</td>
            <td>{asset.company}</td>
            <td>{asset.quantity}</td>
            <td>{asset.value}</td>
            <td><button type="button" name="asset-sell" onClick={() => handleClickPage(asset)}>Vender</button></td>
            {/* <td><button type="button" name="asset-buy" onClick={() => handleClickPage(asset)}>Comprar</button></td> */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MyAssets;
