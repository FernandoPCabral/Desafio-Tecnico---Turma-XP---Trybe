import styled from 'styled-components'

export const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 47%;
  height: 110px;
  margin-top: 60px;

  input{
    height: 30px;
    outline: none;
    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    padding-left: 10px;
    transition: all 0.3s ease-in-out;

    ::placeholder {
        color: #042A2B;
      }

      :hover {
        border: 3px solid ${({theme}) => theme.colors.primary.main};
        color: #042A2B;
      }

      :focus{
        border: 3px solid ${({theme}) => theme.colors.primary.main};
        color: #042A2B;
      }
  }

  div{
    justify-content: space-between;

      button{
      background-color: ${({theme}) => theme.colors.primary.normal};
      color: #ffffff;

      width: 100px;
      height: 35px;
      border-radius:15px;
      margin-right: 10px;
      margin-left: 14px;

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
    }
  }
`;