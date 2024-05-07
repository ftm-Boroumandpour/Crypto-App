import { useEffect, useState } from "react"

import TableCoin from "../modules/TableCoin"
import Pagination from "../modules/Pagination.jsx"
import Search from "../modules/Search.jsx"
import Chart from "../modules/Chart.jsx"

import {getCionList} from "../services/cryptoApi.js"

function HomePage() {
    const [coins , setCoins] =useState([])
    const [isLoading , setIsLoading] =useState(true)
    const [page , setPage] =useState(1)
    const [currency , setCurrency] =useState("usd")
    const [chart, setChart] = useState(null)

    useEffect(()=>{
        const getData = async()=>{
            setIsLoading(true)
            const res = await fetch(getCionList(page , currency))
            const json = await res.json()
            setCoins(json)
            setIsLoading(false)
        }
        getData()
    },[page , currency])
  return (
    <div>
        <Search currency={currency} setCurrency={setCurrency} />
        <TableCoin  coins={coins} isLoading={isLoading} setChart={setChart} currency={currency}/>
        <Pagination page={page} setPage={setPage}/>
        {!!chart && <Chart  chart={chart} setChart={setChart} />}
    </div>
  )
}

export default HomePage