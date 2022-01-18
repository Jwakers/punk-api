import React, { useState } from 'react'
import style from './accordion.module.scss';

const AccordionItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        // Toggle the 'open' class
        setIsOpen(!isOpen)
    }
    const handleKeypress = (event) => {
        // Basic tab and enter key funtionality
        console.dir(event)
        if (event.key !== 'Enter') return
        setIsOpen(!isOpen)
    }
    const {name, tagline, description, id} = item
    return (
        <div className={`${style.Accordion_item} ${isOpen && style.Accordion_item___open}`} onClick={handleClick} onKeyPress={handleKeypress} tabIndex={id}>
            <div className={style.Accordion_item_head}>{name}</div>
            <div className={style.Accordion_item_content}>
                <div className={style.Accordion_item_content_inner}>
                    <div className={style.Accordion_item_content_tag}>{tagline}</div>
                    <div>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
