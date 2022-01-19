import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import style from './layout.module.scss';
import Accordion from '../../components/Accordion/Accordion';
import Grid from '../../components/Grid/Grid';
import Filters from '../../components/Filters/Filters';
import Nav from '../../components/Nav/Nav';

const Layout = () => {
	const initialParams = {
		per_page: 9,
		page: 1,
	};
	const [beers, setBeers] = useState(null);
	const [params, setParams] = useState(initialParams);
	const [formData, setFormData] = useState({});

	const endpoint = 'https://api.punkapi.com/v2/beers';

	useEffect(() => {
		// Fetch objects from the API
		fetchData(params);
	}, [params]);

	const fetchData = async () => {
		try {
			const response = await axios.get(endpoint, { params });
			setBeers(response.data);
			console.log(response.request.responseURL);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setFormData({
			...formData,
			[name]: value.trim().replace(/\s/g, '_'),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Remove empty values from the form data
		const cleanedFormData = Object.fromEntries(
			Object.entries(formData).filter((item) => item[1] !== '')
		);
		console.log({ formData, cleanedFormData });
		setParams({ ...initialParams, ...cleanedFormData });
	};

	const handleSortOrder = (e) => {
		console.log(e);
	};

	return (
		<div className={style.Layout}>
			<Nav />
			{beers && (
				<>
					<Filters onSubmit={handleSubmit} onSort={handleSortOrder} />
					<Routes>
						<Route path='/' exact element={<Accordion data={beers} />} />
						<Route
							path='/grid'
							exact
							element={
								<>
									<Grid data={beers} />
								</>
							}
						/>
					</Routes>
				</>
			)}
		</div>
	);
};

export default Layout;
