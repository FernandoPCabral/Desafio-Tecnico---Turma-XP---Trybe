import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: #042A2B;

  width: 100vw;
  max-width: 1980px;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  min-width: 40%;
  width: 40%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary.main};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 130px 50px 150px;

  h1 {
    color: #fff;
    font-size: 40px;
    font-weight: normal;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      height: 40px;
      margin: 0px 0px 15px;
      outline: none;
      background-color: transparent;
      border: 2px solid #ffffff;
      border-radius: 10px;
      color: #ffffff;
      font-size: 15px;
      padding-left: 10px;
      transition: all 0.3s ease-in-out;

      ::placeholder {
        color: #ffffff;
      }

      :hover {
        border: 2px solid #042A2B;
        color: #042A2B;
      }

      :focus{
        border: 2px solid #042A2B;
        color: #042A2B;
      }
    }
  }
`

export const Aside = styled.div`
  width: 55%;
  margin: 0 10px;
`

export const Button = styled.button`
  background-color: #89023E;
  color: #ffffff;
  height: 45px;
  width: 100%;
  font-size: 25px;
  transition: all 0.3s ease-in-out;

  :disabled{
    background-color: #CEABB1;
    cursor: not-allowed;
  }

  :hover{
    background-color: #ffffff90;
    color: #000000;
  }

  :active{
    background-color: #000000;
    color: #ffffff;
  }
`;

export const FootContent = styled.footer`
  span{
    border: 2px solid #ffffff;
    color: #ffffff;
    border-radius: 10px;
    padding: 5px;
  }
`