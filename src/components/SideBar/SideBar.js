import React from 'react';
import { Link } from "react-router-dom";


function SideBar() {
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="" alt=""/>
			<ul className="navbar">
				<li className="navbar__item">
		      <Link to={`/3d-hackathon/`}>
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">HOME</p>
					</Link>
				</li>
				<li className="navbar__item">
		      <Link to={`/3d-hackathon/`}>
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">INVENTORY</p>
					</Link>
				</li>
				<li className="navbar__item">
		      <Link to={`/3d-hackathon/`}>
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">WAREHOUSE</p>
					</Link>
				</li>				
			</ul>
		</div>
	)
}

export default SideBar;