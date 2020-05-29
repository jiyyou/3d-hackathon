import React from 'react';
import './Main.scss';
import SideBar from '../../components/SideBar/SideBar';
import UserAvatar from '../../components/UserAvatar/UserAvatar';

class Main extends React.Component {


	render() {
		return (
			<section className="main">
				<SideBar />
				<div className="maincontent">
					<UserAvatar />
					<div className="maincontent__overview">
						<h2 className="maincontent__subtitle">Overview</h2>
						<ul className="maincontent__scardlist">
							<li className="maincontent__scard">
								<h3 className="maincontent__scardtitle">Today's Order</h3>
							</li>
							<li className="maincontent__scard">
								<h3 className="maincontent__scardtitle">Today's Sales</h3>
							</li>
							<li className="maincontent__scard">
								<h3 className="maincontent__scardtitle">Need to Ship</h3>
							</li>
							<li className="maincontent__scard">
								<h3 className="maincontent__scardtitle">Require Delivery</h3>
							</li>
						</ul>
					</div>
					<div className="maincontent__bcardlist">
						<div className="maincontent__bcardcont">
							<h2 className="maincontent__subtitle">Year to Date Sales vs Last Year</h2>
							<div className="maincontent__bcard">
								
							</div>
						</div>
						<div className="maincontent__bcardcont">
							<h2 className="maincontent__subtitle">Current Inventory</h2>
							<div className="maincontent__bcard">
								
							</div>							
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Main;