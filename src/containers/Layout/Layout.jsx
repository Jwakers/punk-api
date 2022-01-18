import React, { useState, useEffect} from 'react'
import axios from 'axios'
import style from './layout.module.scss'
import Accordion from '../../components/Accordion/Accordion'
import Grid from '../../components/Grid/Grid'
// import Filters from '../../components/Filters/Filters'

const Layout = () => {
    const [beers, setBeers] = useState(null)
    const [params, setParams] = useState({
        per_page: 8,
        page: 1
    })
    const [minAbv, setMinAbv] = useState('');
    const [maxAbv, setMaxAbv] = useState('');

    
    const endpoint = 'https://api.punkapi.com/v2/beers';
    
    useEffect(() => {
        // Fetch objects from the API
        fetchData()
    }, [params])

    const fetchData = async () => {
        console.log(params)
        try {
            const response = await axios.get(endpoint, { params })
            setBeers(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    const handleChange = (event, updateState) => {
        const {value} = event.target
        console.log(event)
        updateState(value)
        console.log(minAbv, maxAbv)
    }

    const handleSubmit = () => {
        // TODO - add validation and error handling

        let abv_gt = parseFloat(minAbv),
            abv_lt = parseFloat(maxAbv);
        if (isNaN(abv_gt)) abv_gt = null
        if (isNaN(abv_lt)) abv_lt = null
        setParams({...params, abv_gt, abv_lt})
        fetchData()
    }

    return (
        <div className={style.Layout}>
            {beers ? (
                <>
                    <Accordion data={beers} />
                    <div>
                        <input type="text" placeholder="Min ABV" value={minAbv} onChange={(event) => handleChange(event, setMinAbv)} />
                        <input type="text" placeholder="Max ABV" value={maxAbv} onChange={(event) => handleChange(event, setMaxAbv)} />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    <Grid data={beers} />
                </>
            )
             : null}
        </div>
    )
}

export default Layout