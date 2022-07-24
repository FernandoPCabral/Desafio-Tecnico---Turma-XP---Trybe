import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import MyAssets from '../Components/MyAssets';
import AvailableAssets from '../Components/AvailableAssets'
import AssetsExample from '../test'
import { ButtonAccount } from '../Components/shared/ButtonAccount';


function AssetsList(props) {

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('AvailableAssets'))) {
      localStorage.setItem('AvailableAssets', JSON.stringify(AssetsExample));
    }
  });

  return( 
    <div>
      <Header {...props} />
      <MyAssets {...props} />
      <AvailableAssets {...props} />
      <Link to='/account'>
        <ButtonAccount type="button" name="negotiation">Depósito/Retirada</ButtonAccount>
      </Link>
    </div>
  )
}

export default AssetsList;
