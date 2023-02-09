import styled from 'styled-components';

export const ProfileCard = styled.div`
  max-width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: papayawhip;
  padding: 10px 60px;
`;

export const Description = styled.div`
  background-color: aliceblue;
  padding: 10px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border: solid 1px papayawhip;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const UserTag = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const UserLocation = styled.p`
  text-align: center;
  font-size: 18px;
  font-style: italic;
`;

export const UserStats = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  justify-content: space-evenly;
  text-align: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.span`
  color: blue;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
