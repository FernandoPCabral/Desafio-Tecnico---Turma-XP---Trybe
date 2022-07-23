import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Login from './Pages/Login';
import Provider from './Context/myProvider';
import AssetsList from './Pages/AssetsList';
import AccountMovement from './Pages/AccountMovement';
import AssetNegotiation from './Pages/AssetNegotiation';
import GlobalStyles from './assets/styles/global'
import defaultTheme from './assets/styles/themes/default'

function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Provider>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} />} />
            <Route exact path="/assets" render={(props) => <AssetsList {...props} />} />
            <Route exact path="/assets/:id" render={(props) => <AssetNegotiation {...props} />} />
            <Route exact path="/account" render={(props) => <AccountMovement {...props} />} />
          </Switch>
          <GlobalStyles />
        </Provider>
      </ThemeProvider>
    );
}

export default App;
