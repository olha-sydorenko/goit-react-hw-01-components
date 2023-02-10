import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin: 35px auto;
  border: 1px solid grey;
`;

export const TableHeader = styled.th`
  background-color: #4ebdd6;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid grey;
`;

export const TableRow = styled.tr`
  border: 1px solid grey;
  :nth-child(even) {
    background-color: #ecf2f3;
  }
`;

export const TableData = styled.td`
  border: 1px solid grey;
  text-align: center;
`;
