/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { RotatingLines } from "react-loader-spinner"

import TableRow from "./TableRow"

import styles from "./TableCion.module.css"


function TableCoin({coins , isLoading ,setChart ,currency}) {
    // console.log(coins)
  return (
    <div className={styles.container}>
        {isLoading ? 
        (<RotatingLines strokeColor="#3874ff" strokeWidth="2" />)
        :(
            <table className={styles.table}>
            <thead>
                <tr>
                    <th>Cion</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total volume</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {coins.map(coin =>(<TableRow key={coin.id} coin={coin} setChart={setChart} currency={currency}/>))}
            </tbody>
        </table>
        )}
    </div>
  )
}

export default TableCoin