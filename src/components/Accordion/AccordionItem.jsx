import style from './accordion.module.scss';

const AccordionItem = ({ item, isOpen, onClick, handleKeypress }) => {
	const { name, tagline, description, id } = item;
	return (
		<div
			className={`${style.Accordion_item} ${
				isOpen && style.Accordion_item___open
			}`}
			onKeyPress={handleKeypress}
			tabIndex={id}
		>
			<div className={style.Accordion_item_head} onClick={onClick}>
				{name}
			</div>
			<div className={style.Accordion_item_content}>
				<div className={style.Accordion_item_content_inner}>
					<div className={style.Accordion_item_content_tag}>{tagline}</div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
