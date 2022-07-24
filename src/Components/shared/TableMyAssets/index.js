import styled from 'styled-components'

export const TableMyAssets = styled.table`
  margin-left: 15px;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 45%;

  border: 1px solid #ffffff;
  border-collapse: collapse;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary.main};

  box-shadow: 0px 0px 20px #ffffff, 
    0px 10px 20px #ffffff,
    0px 20px 20px #ffffff,
    0px 10px 20px #ffffff;

  caption{
    font-weight: bold;

    background-color: ${({theme}) => theme.colors.primary.main};
    color: #ffffff;

    height: 35px;
    padding-top: 8px;
  }

  thead{
    height: 35px;
    justify-content: space-between;
    text-align: center;

    background-color: #00cccc30;
    color: #ffffff;
  }

  tbody{
    tr{
      background-color: #ffffff;

      :hover{
        background-color: #00cccc30;
        color: #ffffff;
      }

      td{
        height: 35px;
        text-align: center;
        padding: 2px 0px 2px;

        align-items: center;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;