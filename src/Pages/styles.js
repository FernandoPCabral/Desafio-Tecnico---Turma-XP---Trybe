import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #4D6A6D;
  width: 100vw;
  height: 100vh;
  align-items: center;
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

  h2 {
    color: #fff;
  }
`

export const Button = styled.button`
  background-color: #8E5572;
  width: 70px;
`;