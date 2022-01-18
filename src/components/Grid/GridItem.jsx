import style from './grid.module.scss'

const GridItem = ({item}) => {
    const {name, tagline, image_url, abv} = item
    return (
        <div className={style.Grid_item}>
            <img className={style.Grid_item_image} src={image_url} alt={name} />
            <div className={style.Grid_item_content}>
                <div className={style.Grid_item_head}>{name} (ABV: {abv})</div>
                <div className={style.Grid_item_tag}>{tagline}</div>
            </div>
        </div>
    )
}

export default GridItem