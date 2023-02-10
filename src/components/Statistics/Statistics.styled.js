import styled from 'styled-components';

export const Section = styled.section`
  margin: 30px auto;
  width: 300px;
  border: solid 1px darkblue;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: darkblue;
`;

export const StatsList = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-evenly;
  text-align: center;
  background-color: ${key => getRandomHexColor(key)};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ItemLabel = styled.span`
  font-size: 500;
  font-size: 16px;
`;

export const ItemPercentage = styled.span`
  font-weight: 500;
  font-size: 18px;
`;
