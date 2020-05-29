import React from 'react';

function SideBar() {
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="" alt=""/>
			<ul className="navbar">
				<li className="navbar__item">
		      <Link to={`/`}>
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">HOME</p>
					</Link>
				</li>
				<li className="navbar__item">
		      <Link to={`/`}>
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">INVENTORY</p>
					</Link>
				</li>
				<li className="navbar__item">
		      <Link to={`/`}>
						<img className="navbar__icon" src="" alt=""/>
						<p className="navbar__link">Warehouse</p>
					</Link>
				</li>				
			</ul>
		</div>
	)
}

export default SideBar;