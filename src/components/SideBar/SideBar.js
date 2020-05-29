import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.scss';
import homeicon from '../../assets/icons/24-basic-home.svg';
import basicicon from '../../assets/icons/24-basic-settings.svg';
import clipboard from '../../assets/icons/24-file-clipboard-checked.svg';
import filefolder from '../../assets/icons/24-file-folder-opened.svg';
import shoppingbag from '../../assets/icons/24-shopping-bag.svg';
import cross from '../../assets/icons/24-various-cross.svg';


function SideBar() {
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="" alt=""/>
			<ul className="navbar">
	      <Link to={`/3d-hackathon/`}>
					<li className="navbar__item">
						<img className="navbar__icon" src={homeicon} alt=""/>
						<p className="navbar__link">Home</p>
					</li>
				</Link>
	      <Link to={`/3d-hackathon/inventory`}>
					<li className="navbar__item">
							<img className="navbar__icon" src={clipboard} alt=""/>
							<p className="navbar__link">Inventory</p>
					</li>
				</Link>
		    <Link to={`/3d-hackathon/`}>				
					<li className="navbar__item">
						<img className="navbar__icon" src={shoppingbag} alt=""/>
						<p className="navbar__link">Warehouse</p>
					</li>
				</Link>
		    <Link to={`/3d-hackathon/`}>
					<li className="navbar__item">
						<img className="navbar__icon" src={filefolder} alt=""/>
						<p className="navbar__link">Sales Report</p>					
					</li>
				</Link>
				<Link to={`/3d-hackathon/`}>
					<li className="navbar__item">		      
							<img className="navbar__icon" src={cross} alt=""/>
							<p className="navbar__link">Orders</p>					
					</li>
				</Link>
				<Link to={`/3d-hackathon/`}>
					<li className="navbar__item">
		      	<img className="navbar__icon" src={basicicon} alt=""/>
						<p className="navbar__link">Settings</p>					
					</li>
				</Link>
			</ul>
			<div className="sidebar__footer"></div>
		</div>
	)
}

export default SideBar;