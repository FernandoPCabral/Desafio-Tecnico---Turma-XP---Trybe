import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;;
  margin-top: 90px;


  span{
  
    width: 270px;
    height: 40px;
    background-color: ${({theme}) => theme.colors.primary.main};

    text-align: center;
    padding-top: 12px;

    border: 1px solid #ffffff;
    border-radius: 10px;
  }
`;

export const ContainerOne = styled.div`
  margin-top: 60px;


  input{
  
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
`;

export const Input = styled.input`
  width: 270px;
  height: 30px;
  color: #ffffff;
  background-color: ${({theme}) => theme.colors.primary.main};

  text-align: center;
  padding-top: 2px;
  margin-top: 20px;

  border: 1px solid #ffffff;
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  font-weight: bold;

  ::placeholder{
    color: #ffffff;
    font-weight: bold;
  }

  :hover {
    border: 2px solid #000000;
    color: #042A2B;
  }

  :focus{
    border: 2px solid #000000;
    color: #000000;
  }
`;

export const ContainerTwo = styled.div`

  button{
    background-color: ${({theme}) => theme.colors.primary.normal};
    color: #ffffff;

    width: 100px;
    height: 35px;
    border-radius:15px;
    margin-top: 80px;
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
`;