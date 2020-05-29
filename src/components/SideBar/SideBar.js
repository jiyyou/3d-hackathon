import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.scss';


function SideBar() {
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="" alt=""/>
			<ul className="navbar">
	      <Link to={`/3d-hackathon/`}>
					<li className="navbar__item">
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">Home</p>
					</li>
				</Link>
	      <Link to={`/3d-hackathon/inventory`}>
					<li className="navbar__item">
							<img className="navbar__icon" src="" alt=""/>
							<p className="navbar__link">Inventory</p>
					</li>
				</Link>
		    <Link to={`/3d-hackathon/`}>				
					<li className="navbar__item">
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">Warehouse</p>
					</li>
				</Link>
		    <Link to={`/3d-hackathon/`}>
					<li className="navbar__item">
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">Sales Report</p>					
					</li>
				</Link>
				<Link to={`/3d-hackathon/`}>
					<li className="navbar__item">		      
							<img className="navbar__icon" src="" alt=""/>
							<p className="navbar__link">Orders</p>					
					</li>
				</Link>
				<Link to={`/3d-hackathon/`}>
					<li className="navbar__item">
		      	<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">Settings</p>					
					</li>
				</Link>
			</ul>
			<div className="sidebar__footer"></div>
		</div>
	)
}

export default SideBar;