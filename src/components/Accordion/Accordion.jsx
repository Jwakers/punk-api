import style from './accordion.module.scss';
import AccordionItem from './AccordionItem'

const Accordion = ({ data }) => {
    if (!data) return null
    return (
        <div className={style.Accordion}>
            {data.map(item => (
                <AccordionItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Accordion