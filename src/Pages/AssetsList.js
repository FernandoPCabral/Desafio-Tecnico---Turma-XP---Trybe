import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import AvailableAssets from '../Components/AvailableAssets';
import Header from '../Components/Header'
import MyAssets from '../Components/MyAssets';
import AssetsExample from '../test'


function AssetsList(props) {

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('AvailableAssets'))) {
      localStorage.setItem('AvailableAssets', JSON.stringify(AssetsExample));
    }
  });

  return( 
    <div>
      <Header {...props} />
      <br />
      <MyAssets {...props} />
      <br />
      <AvailableAssets {...props} />
      <br />
      <Link to='/account'>
        <input type="button" name="negotiation" value="Depósito/Retirada" />
      </Link>
      <br />
    </div>
  )
}

export default AssetsList;
