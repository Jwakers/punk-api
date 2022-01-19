import style from './nav.module.scss';
import NavItem from './NavItem';

const Nav = () => (
	<nav className={style.Nav}>
		<NavItem value='Accordion' path='punk-api/' />
		<NavItem value='Grid' path='punk-api/grid' />
	</nav>
);

export default Nav;
