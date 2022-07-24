import styled from 'styled-components'

export const HeaderStyle = styled.header`
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme}) => theme.colors.primary.main};
    color: #ffffff;

    height: 60px;
    padding: 10px;

    div{
      span{
        padding: 3px
      }
    }
  }
`;