import style from './accordion.module.scss';

const AccordionItem = ({ item, isOpen, onClick, handleKeypress }) => {
	const { name, tagline, description, abv, first_brewed, id } = item;
	return (
		<div
			className={`${style.Accordion_item} ${
				isOpen && style.Accordion_item___open
			}`}
			onKeyPress={handleKeypress}
			tabIndex={id}
		>
			<div className={style.Accordion_item_head} onClick={onClick}>
				<div className={style.Accordion_item_head_inner}>
					<span>{name}</span>
					<span>{abv} abv</span>
				</div>
			</div>
			<div className={style.Accordion_item_content}>
				<div className={style.Accordion_item_content_inner}>
					<div className={style.Accordion_item_content_tag}>{tagline}</div>
					<div>First brewed: {first_brewed}</div>
					<p>"{description}"</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
