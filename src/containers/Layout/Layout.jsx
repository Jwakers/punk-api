import React, { useState, useEffect} from 'react'
import axios from 'axios'
import style from './layout.module.scss'
import Accordion from '../../components/Accordion/Accordion'

const Layout = () => {
    const [beers, setBeers] = useState(null)
    const [params, setParams] = useState({
        per_page: 8,
        page: 1
    })
    const endpoint = 'https://api.punkapi.com/v2/beers';

    useEffect(() => {
        // Fetch objects from the API
        async function fetchData() {
            try {
                const response = await axios.get(endpoint, { params })
                setBeers(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [params])

    return (
        <div className={style.Layout}>
            <Accordion data={beers} />
        </div>
    )
}

export default Layout