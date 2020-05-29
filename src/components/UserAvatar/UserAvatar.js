import React from 'react';
import './UserAvatar.scss';
import userimage from '../../assets/images/vp-of-sales-2.jpg';

function UserAvatar() {
	return (
		<div className="avatar">
			<img className="avatar__pic" src={userimage} alt=""/>
			<p className="avatar__name">Carla Craft</p>
		</div>
	)
}

export default UserAvatar;