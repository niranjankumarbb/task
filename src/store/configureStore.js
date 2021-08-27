 import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import dataReducer from '../reducers/dataReducer'
 

const configureStore =()=>{
    const store =  createStore(combineReducers({
        data : dataReducer       
   }),applyMiddleware(thunk))
   return store
}
export default configureStore