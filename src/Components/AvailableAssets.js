import React, { useContext, useEffect }  from 'react';
import myContext from '../Context/myContext'
import { Table } from '../Components/shared/Table'
import { ButtonNegotiation } from '../Components/shared/ButtonNegotiation'

function AvailableAssets(props) {
  const { setAssetChosen, availableAssets, setAvailableAssets } = useContext(myContext)

  const handleClickPage = (asset) => {
    const { history } = props
    setAssetChosen(asset);
    localStorage.setItem('AssetChosen', JSON.stringify(asset));
    history.push(`/assets/buy/${asset.id}`)
  }

  useEffect(() => {
    setAvailableAssets(JSON.parse(localStorage.getItem('AvailableAssets')))
  }, [setAvailableAssets])

  return(
    <Table>
      <caption>Ações disponíveis para Investir</caption>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Empresa</th>
          <th>Quantidade</th>
          <th>Valor em Reais</th>
          <th class="last">Negociar</th>
        </tr>
      </thead>
      <tbody>
        {availableAssets && availableAssets.map((asset) => (
          <tr key={ asset.id }>
            <td>{asset.name}</td>
            <td>{asset.company}</td>
            <td>{asset.quantity}</td>
            <td>{asset.value}</td>
            <td><ButtonNegotiation type="button" name="asset-buy" onClick={() => handleClickPage(asset)}>Comprar</ButtonNegotiation></td>
          </tr>
        ))}
      </tbody>
    </Table>
    
  )
}

export default AvailableAssets;
