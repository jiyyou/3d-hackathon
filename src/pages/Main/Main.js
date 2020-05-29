import React from 'react';
import './Main.scss';
import SideBar from '../../components/SideBar/SideBar';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import image1 from '../../assets/images/frame-16.svg';
import image2 from '../../assets/images/frame-17.svg';
import image3 from '../../assets/images/need-to-ship.svg';
import image4 from '../../assets/images/global-nps.svg';
import image5 from '../../assets/images/frame-14.svg';
import image6 from '../../assets/images/frame-15.svg';



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
								<img className="maincontent__scardcontent" src={image1} alt=""/>
							</li>
							<li className="maincontent__scard">
								<img className="maincontent__scardcontent" src={image2} alt=""/>
							</li>
							<li className="maincontent__scard">
								<img className="maincontent__scardcontent" src={image3} alt=""/>
							</li>
							<li className="maincontent__scard">
								<img className="maincontent__scardcontent" src={image4} alt=""/>
							</li>
						</ul>
					</div>
					<div className="maincontent__bcardlist">
						<div className="maincontent__bcardcont">
							<h2 className="maincontent__subtitle">Year to Date Sales vs Last Year</h2>
							<div className="maincontent__bcard">
								<img src={image5} alt=""/>
							</div>
						</div>
						<div className="maincontent__bcardcont">
							<h2 className="maincontent__subtitle">Current Inventory</h2>
							<div className="maincontent__bcard">
								<img src={image6} alt=""/>
							</div>							
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Main;