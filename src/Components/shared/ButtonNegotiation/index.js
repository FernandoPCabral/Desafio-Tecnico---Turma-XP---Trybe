import styled from 'styled-components'

export const ButtonNegotiation = styled.button`
  background-color: ${({theme}) => theme.colors.primary.normal};
  color: #ffffff;

  width: 100px;
  height: 35px;
  border-radius:15px;

  font-size: 18px;
  transition: all 0.3s ease-in-out;

  :hover{
    background-color: #ffffff90;
    color: #000000;
  }

  :active{
    background-color: #000000;
    color: #ffffff;
  }
`;