import style from './nav.module.scss';
import { NavLink } from 'react-router-dom';

const NavItem = ({ path, value }) => (
	<NavLink
		className={({ isActive }) => {
			console.log(isActive, value);
			const classes = [style.Nav_item];
			if (isActive) classes.push(style.Nav_item___active);
			return classes.join(' ');
		}}
		to={path}
	>
		{value}
	</NavLink>
);

export default NavItem;
