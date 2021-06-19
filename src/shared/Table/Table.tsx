import React from 'react'
import Products from './Table.mockdata'
import './Table.scss'


const Headers: TableHeader[] = [
    {key: 'id', value: '#'},
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Avaliable Stock', right: true}
]
declare interface TableHeader {
    key: string
    value: string
    right?: boolean    
}

type IndexedHeaders = {
    [key: string] : TableHeader
}

type OrganizedItem = {
    [key: string] : any
}

function organizeData(data: any[], Headers: TableHeader[]): 
 [OrganizedItem[], IndexedHeaders] {
    const IndexedHeaders: IndexedHeaders = {}

    Headers.forEach(header => {
        IndexedHeaders[header.key] = {
            ...header
        }
    })

    const headerKeysInOorder = Object.keys(IndexedHeaders)

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeysInOorder.forEach(key => {
            organizedItem[key] = item[key]
        })

        organizedItem.$original = item
        return organizedItem
    })

    return [organizedData,IndexedHeaders]
}

const Table = () => {

    const [organizedData, indexedHeaders] = organizeData(Products,Headers)

    return  <table className="AppTable">
                <thead>
                    <tr>
                        {Headers.map(header =>  
                            <th  className={header.right ? 'right' : '' } key={header.key}>
                                {header.value}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {
                        organizedData.map((row, i) => {
                            return <tr key = {i}>
                                {
                                    Object
                                    .keys(row)
                                    .map((item, i) => {

                                        return  item === '$original' ? null :
                                        <td  key = {row.$original.id + i}
                                                    className={indexedHeaders[item].right ? 'right' : ''}> 
                                                    {row[item]}
                                                </td>}
                                        )
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
}

export default Table