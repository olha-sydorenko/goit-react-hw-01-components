import styled from 'styled-components';

export const Item = styled.li`
  border: solid 1px black;
`;

export const Status = styled.span`
  color: ${({ friendStatus }) => (friendStatus ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  border: none;
`;

export const FriendName = styled.p`
  font-size: 20px;
`;
