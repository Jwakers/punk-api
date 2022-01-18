import GridItem from './GridItem'
import style from './grid.module.scss'

const Grid = ({ data }) => (
        <div className={style.Grid}>
            {data.map(item => <GridItem item={item} key={item.id} />)}
        </div>
    )

export default Grid