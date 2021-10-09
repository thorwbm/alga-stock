import { Product } from "../../shared/Table/table.mockdata";
import { Action } from "./Products.reducer";

export const insertNewProduct = () : Action <Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: '123asdf',
            name: 'COOKIES',
            price: 0.53,
            stock: 700
        }
    }
}