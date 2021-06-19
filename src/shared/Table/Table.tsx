import React from 'react'
import Products from './Table.mockdata'
import './Table.scss'


const Headers = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Avaliable Stock'}
]

const Table = () => {
    return  <table className="AppTable">
                <thead>
                    <tr>
                        {Headers.map(header =>  <td key={header.key}>
                                                    {header.value}
                                                </td>
                                          )}
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map(product =>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td className="right">{product.stock}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
}

export default Table