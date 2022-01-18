import style from './filters.module.scss'

const Filters = (props) => {
    
    return (
        <div className={style.Filters}>
            <input type="text" placeholder="Min ABV" value={props.minAbv} onChange={(event) => props.onChange(event)} />
            <input type="text" placeholder="Max ABV" value={props.maxAbv} onChange={(event) => props.onChange(event)} />
        </div>
    )
}

export default Filters