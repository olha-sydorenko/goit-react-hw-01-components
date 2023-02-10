import styled from 'styled-components';

export const Item = styled.li`
  width: 200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ friendStatus }) => (friendStatus ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  border: none;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
