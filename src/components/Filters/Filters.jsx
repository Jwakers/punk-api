import style from './filters.module.scss';
import Button from '../Button/Button';

const Filters = (props) => {
	return (
		<form onSubmit={props.onSubmit} className={style.Filters}>
			<input
				className={style.Filters_input}
				type='number'
				placeholder='Min ABV'
				name='abv_gt'
				min='0'
				onChange={props.onChange}
			/>
			<input
				className={style.Filters_input}
				type='number'
				placeholder='Max ABV'
				name='abv_lt'
				min='0'
				onChange={props.onChange}
			/>
			<input
				className={style.Filters_input}
				type='text'
				placeholder='Beer name'
				name='beer_name'
				onChange={props.onChange}
			/>
			<Button type='submit' value='submit' />
			<select
				className={`${style.Filters_input} ${style.Filters_input___select}`}
				name='sort_order'
				onChange={props.onSort}
				defaultValue='default'
			>
				<option value='default' disabled>
					Sort order
				</option>
				<option value={JSON.stringify({ sort: 'asc', attr: 'abv' })}>
					ABV - Low to High
				</option>
				<option value={JSON.stringify({ sort: 'desc', attr: 'abv' })}>
					ABV - High to Low
				</option>
			</select>
		</form>
	);
};

export default Filters;
