import { createStore, 
         combineReducers,
         compose, 
         applyMiddleware} from 'redux'
import thunk, {ThunkAction } from 'redux-thunk'
import Products from './Products/Products.reducer'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    products: Products
})

const pesistedReducer = persistReducer({
    key: 'algastock',
    storage, 
    blacklist: ['products']
}, reducers)

export interface Action< T = any>{
    type: string
    payload?: T
}

const store = createStore(
    pesistedReducer,
    compose(
        applyMiddleware(thunk),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        )
        
const persistor = persistStore(store)
export interface Action<T = any> {
    type: string
    payload?: T
}

export type RootState = ReturnType<typeof reducers>

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

export type Thunk<T = any>  = 
    ThunkAction<void, RootState , unknown, Action<T>>

export {store, persistor}