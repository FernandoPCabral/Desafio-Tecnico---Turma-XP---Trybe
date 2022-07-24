import styled from 'styled-components'

export const ButtonAccount = styled.button`
  width: 260px;
  height: 45px;
  margin-left: 170px;

  color: #fff;
  background-color: ${({theme}) => theme.colors.primary.normal};

  border: none;
  border-radius: 10px;
  font-size: 25px;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #ffffff90;
    color: #000;
  }

  :active{
    background-color: #000000;
    color: #ffffff;
  }

  :disabled{
    background-color: #fff;
    cursor: not-allowed;
  }
`