import React from 'react';
import PropTypes from 'prop-types';
import FriendListItemStyle from '../FriendListItem/FriendListItemStyle.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={FriendListItemStyle.Item}>
            <span className={
                isOnline ? FriendListItemStyle.StatusIsOnline : FriendListItemStyle.StatusIsOfline
            }></span>
            <img className={FriendListItemStyle.Avatar} src={avatar} alt='' width='48' />
            <p className={FriendListItemStyle.Name}>{name}</p>
        </li>
    )
}
FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;