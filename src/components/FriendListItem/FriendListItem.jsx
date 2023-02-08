import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
