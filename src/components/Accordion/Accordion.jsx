import { useState } from 'react';
import style from './accordion.module.scss';
import AccordionItem from './AccordionItem';
import Button from '../Button/Button';

const Accordion = ({ data }) => {
	const [openItems, setOpenItems] = useState([]);
	const updateOpenState = (itemId) => {
		// Toggle accordion item in and out of state (openItems)
		if (openItems.includes(itemId)) {
			setOpenItems(openItems.filter((id) => id !== itemId));
		} else {
			setOpenItems([...openItems, itemId]);
		}
	};
	const handleClick = (itemId) => {
		updateOpenState(itemId);
	};
	const handleKeypress = (e, itemId) => {
		// Basic tab and enter key funtionality
		if (e.key !== 'Enter') return;
		updateOpenState(itemId);
	};
	const handleCloseAll = () => {
		setOpenItems([]);
	};

	return (
		<div className={style.Accordion}>
			{data.map((item) => (
				<AccordionItem
					item={item}
					key={item.id}
					onClick={handleClick.bind(null, item.id)}
					handleKeypress={(e) => handleKeypress(e, item.id)}
					isOpen={openItems.includes(item.id)}
				/>
			))}
			{Boolean(openItems.length) && (
				<div className={style.Accordion_close}>
					<Button
						onClick={handleCloseAll}
						value='close all'
						modifiers={['Button___close']}
					/>
				</div>
			)}
		</div>
	);
};

export default Accordion;
