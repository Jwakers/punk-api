import { useState } from 'react';
import style from './accordion.module.scss';
import AccordionItem from './AccordionItem'

const Accordion = ({ data }) => {
    
    const [openItems, setOpenItems] = useState([])
    const handleClick = (itemId) => {
        if (openItems.includes(itemId)) {
            setOpenItems(openItems.filter(id => id !== itemId))
        } else {
            setOpenItems([...openItems, itemId])
        }
    }
    const handleKeypress = (event, itemId) => {
        // Basic tab and enter key funtionality
        if (event.key !== 'Enter') return
        if (openItems.includes(itemId)) {
            setOpenItems(openItems.filter(id => id !== itemId))
        } else {
            setOpenItems([...openItems, itemId])
        }
    }
    const handleCloseAll = () => {
        setOpenItems([])
    }

    return (
        <div className={style.Accordion}>
            {data.map(item => (
                <AccordionItem item={item} key={item.id} onClick={() => handleClick(item.id)} handleKeypress={(event) => handleKeypress(event, item.id)} isOpen={openItems.includes(item.id)} />
            ))}
            {openItems.length ? <button className={style.Accordion_close} onClick={handleCloseAll}>Close all</button> : null}
        </div>
    )
}

export default Accordion