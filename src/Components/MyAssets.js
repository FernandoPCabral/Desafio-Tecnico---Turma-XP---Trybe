import React, { useEffect, useContext } from 'react';
import myContext from '../Context/myContext'
import { TableMyAssets } from '../Components/shared/TableMyAssets'
import { ButtonNegotiation } from '../Components/shared/ButtonNegotiation'

function MyAssets(props) {
  const { assetsBought, setAssetsBought, setAssetChosen, availableAssets } = useContext(myContext)

  const handleClickPageSell = (asset) => {
    const { history } = props
    setAssetChosen(asset);
    localStorage.setItem('AssetChosen', JSON.stringify(asset));
    history.push(`/assets/sell/${asset.id}`)
  }

  const handleClickPageBuy = (asset) => {
    asset = availableAssets.find((item) => {
      if (item.id === asset.id) {
        return item
      } else {
        return asset
      }
    })
    const { history } = props
    setAssetChosen(asset);
    localStorage.setItem('AssetChosen', JSON.stringify(asset));
    history.push(`/assets/buy/${asset.id}`)
  }

  useEffect(() => {
    setAssetsBought(JSON.parse(localStorage.getItem('AssetsBought')))
  }, [setAssetsBought])

  return(
    <TableMyAssets>
      <caption>Minhas Ações</caption>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Empresa</th>
          <th>Quantidade</th>
          <th>Valor em Reais</th>
          <th colspan="2">Negociar</th>
        </tr>
      </thead>
      <tbody>
        {assetsBought && assetsBought.map((asset) => (
          <tr key={ asset.id }>
            <td>{asset.name}</td>
            <td>{asset.company}</td>
            <td>{asset.quantity}</td>
            <td>{asset.value}</td>
            <td><ButtonNegotiation type="button" name="asset-sell" onClick={() => handleClickPageSell(asset)}>Vender</ButtonNegotiation></td>
            <td><ButtonNegotiation type="button" name="asset-buy" onClick={() => handleClickPageBuy(asset)}>Comprar</ButtonNegotiation></td>
          </tr>
        ))}
      </tbody>
    </TableMyAssets>
  )
}

export default MyAssets;
