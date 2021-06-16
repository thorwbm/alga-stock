import React from 'react'
import './Table.scss'
import Products from './table.mockdata'

const Headers = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Avaliable Stock'}
]

const Table = () => {
    return  <table className="AppTable">
                <thead>
                    <tr>
                        {
                            Headers.map(header => <th key={header.key}>{header.value}</th> )    
                        } 
                    </tr>
                </thead>
                <tbody>
                        {
                            Products.map(product => <tr>
                                                        <td>
                                                            {product.name}
                                                        </td>
                                                        <td>
                                                            {product.price}
                                                        </td>
                                                        <td className="right">
                                                            {product.stock}
                                                        </td>
                                                    </tr>)
                        }
                    
                </tbody>
            </table>
}

export default Table