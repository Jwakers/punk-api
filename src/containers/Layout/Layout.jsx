import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
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
		setParams({ ...initialParams, ...cleanedFormData });
	};

	const handleSortOrder = (e) => {
		// Convert sort options to usable object
		const options = JSON.parse(e?.target.value);
		const sortedBeers = [...beers];
		sortedBeers.sort((a, b) => {
			if (options.sort === 'desc') {
				if (a[options.attr] <= b[options.attr]) return 1;
				return -1;
			}
			if (a[options.attr] <= b[options.attr]) return -1;
			return 1;
		});
		setBeers(sortedBeers);
	};

	return (
		<div className={style.Layout}>
			<Nav />
			{beers && (
				<>
					<Filters
						onSubmit={handleSubmit}
						onChange={handleChange}
						onSort={handleSortOrder}
					/>
					<Routes>
						<Route
							path='/punk-api/grid'
							exact
							element={
								<>
									<Grid data={beers} />
								</>
							}
						/>
						<Route
							path='/punk-api/'
							exact
							element={<Accordion data={beers} />}
						/>
						<Route exact path='*' element={<Navigate to='/punk-api/' />} />
					</Routes>
				</>
			)}
		</div>
	);
};

export default Layout;
