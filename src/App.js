import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Login from './Pages/Login/Login';
import Provider from './Context/myProvider';
import AssetsList from './Pages/AssetsList';
import AccountMovement from './Pages/AccountMovement/AccountMovement';
import AssetsBuy from './Pages/AssetsBuy/AssetsBuy';
import AssetsSell from './Pages/AssetsSell/AssetsSell';
import GlobalStyles from './assets/styles/global'
import defaultTheme from './assets/styles/themes/default'

function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Provider>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} />} />
            <Route exact path="/assets" render={(props) => <AssetsList {...props} />} />
            <Route exact path="/assets/buy/:id" render={(props) => <AssetsBuy {...props} />} />
            <Route exact path="/assets/sell/:id" render={(props) => <AssetsSell {...props} />} />
            <Route exact path="/account" render={(props) => <AccountMovement {...props} />} />
          </Switch>
          <GlobalStyles />
        </Provider>
      </ThemeProvider>
    );
}

export default App;
