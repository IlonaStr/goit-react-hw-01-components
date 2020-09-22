import React from 'react';
import PropTypes from 'prop-types';
import profileStyles from './Profile.module.css';

const Profile = ({
    name,
    tag,
    location,
    avatar,
    stats,
}) => {
    return (
        <div className={profileStyles.Profile}>
            <div className={profileStyles.Description}>
                <img src={avatar} alt='user avatar' className={profileStyles.Avatar} />
                <p className={profileStyles.Name}>{name}</p>
                <p className={profileStyles.Tag}>@{tag}</p>
                <p className={profileStyles.Location}>{location}</p>
        </div>

        <ul className={profileStyles.Stats}>
            <li className={profileStyles['Stats__item']}>
                <span className={profileStyles.Label}>Followers</span>
                <span className={profileStyles.Quantity}>{stats.followers}</span>
            </li>
            <li className={profileStyles['Stats__item']}>
                <span className={profileStyles.Label}>Views</span>
                <span className={profileStyles.Quantity}>{stats.views}</span>
            </li>
            <li className={profileStyles['Stats__item']}>
                <span className={profileStyles.Label}>Likes</span>
                <span className={profileStyles.Quantity}>{stats.likes}</span>
            </li>
        </ul>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
};
export default Profile;