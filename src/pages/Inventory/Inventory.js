import React from 'react';
import './Inventory.scss';
import SideBar from '../../components/SideBar/SideBar';
import UserAvatar from '../../components/UserAvatar/UserAvatar';

function Inventory() {
	return (
		<section className='inventory'>
			<SideBar />
			<div className='inventorysection'>
				<UserAvatar />
				<div className='inventorysection__search'>
					<h2>Inventory List</h2>
					<form className="inventorysection__form">
						<div>
							<label for="product">Product Name</label>
							<input className="productinput" name="product" type="text" />
						</div>
						<div>
							<label for="sku">SKU</label>
							<input className='skuinput' name="sku" type="text"/>
						</div>
						<div>
							<label for="manufacturer">Manufacturer</label>
							<input className='manufacturerinput' name='manufacturer' type="text"/>
						</div>
						<div>
							<label for="category">Category</label>
							<input className='categoryinput' type="text"/>
						</div>
						<button type='submit'></button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Inventory;