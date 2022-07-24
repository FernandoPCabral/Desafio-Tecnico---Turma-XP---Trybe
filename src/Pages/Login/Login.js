import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import getEmailLocalStorage from '../../helpers/getEmailLocalStorage';
import myContext from '../../Context/myContext'
import * as S from './styles'
import AssetsExample from '../../test'
import Logo from'../../assets/images/Logo.svg'

function Login(props) {
  const { history } = props
  const { userEmail, setUserEmail, userPassword, setUserPassword, disabledButton, setDisabledButton } = useContext(myContext)

  const handleUserInfo = ({ target }) => {
    const { name, value } = target

    if (name === 'email') {
      setUserEmail(value);
    } else if (name === 'password') {
      setUserPassword(value);
    }
  };

  useEffect(() => {
    const enableButton = async () => {
      const passwordMinLength = 8;
      const verifyEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (verifyEmailRegex.test(userEmail) && userPassword.length >= passwordMinLength) {
        setDisabledButton(false)
      } else {
        setDisabledButton(true)
      }
    };
    enableButton();
  }, [userEmail, userPassword, setDisabledButton]);

  const handleClick = async () => {
    localStorage.setItem('User', JSON.stringify(userEmail));
    localStorage.setItem('Date', JSON.stringify(Date()));
    localStorage.setItem('AvailableAssets', JSON.stringify(AssetsExample));
    localStorage.setItem('Balance', JSON.stringify(0));
    history.push('/assets');
  };

    return (
      <S.Container>
        <S.Content>
          <h1>PocketStock</h1>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Digite seu E-mail"
              data-testid="input-email"
              value={ userEmail }
              onChange={ handleUserInfo }
              autoComplete="off"
              />
            <input
              type="password"
              name="password"
              placeholder="Digite sua Senha"
              data-testid="input-password"
              value={ userPassword }
              onChange={ handleUserInfo }
              />
            <S.Button
              type="submit"
              disabled={ disabledButton }
              onClick={ handleClick }
              >
              Acessar
            </S.Button>
          </form>
          <S.FootContent>
            <span>Ultimo Login: {getEmailLocalStorage()}</span>
          </S.FootContent>
        </S.Content>
        <S.Aside>
          <img src={Logo} alt="Pocket Stock Logo" />
        </S.Aside>
      </S.Container>
    );
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Login;
