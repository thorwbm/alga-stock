import { TableHeader } from "../shared/Table"

type IndexedHeaders = {
    [key: string] : TableHeader
}

type OrganizedItem = {
    [key: string] : any
}

export default function organizeData(data: any[], Headers: TableHeader[]): 
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