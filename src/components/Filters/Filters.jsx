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
		</form>
	);
};

export default Filters;
