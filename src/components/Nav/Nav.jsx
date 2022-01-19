import style from './nav.module.scss';
import NavItem from './NavItem';

const Nav = () => (
	<nav className={style.Nav}>
		<NavItem value='Accordion' path='/' />
		<NavItem value='Grid' path='/grid' />
	</nav>
);

export default Nav;
