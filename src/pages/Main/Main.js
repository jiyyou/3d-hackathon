import React from 'react';
import './Main.scss';
import SideBar from '../../components/SideBar/SideBar';

class Main extends React.Component {


	render() {
		return (
			<section className="main">
				<SideBar />
				<div className="maincontent">

				</div>
			</section>
		)
	}
}