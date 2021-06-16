import React from 'react'
import './Table.scss'

const Table = () => {
    return  <table className="AppTable">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>preço</th>
                        <th className="right">estoque</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cookie</td>
                        <td>$1.35</td>
                        <td className="right">23</td>
                    </tr>
                    <tr>
                        <td>Leite 1L</td>
                        <td>$2.35</td>
                        <td className="right">10</td>
                    </tr>
                </tbody>
            </table>
}

export default Table