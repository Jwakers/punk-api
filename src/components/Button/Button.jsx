import style from './button.module.scss';

const Button = ({ value, onClick, modifiers = [], otherProps }) => {
	const modsArr = modifiers.map((mod) => {
		// Build an array of modifiers to concatinate into css classes
		return style?.[mod] || '';
	});

	return (
		<button
			className={`${style.Button} ${modsArr && modsArr.join(' ')}`}
			onClick={onClick}
			{...otherProps}
		>
			{value}
		</button>
	);
};

export default Button;
