import { combineReducers } from 'redux'
import auth from './mine/auth'
import query from './mine/query'
import toast from './common'
import product from './home/product'

const rootReducer = combineReducers({auth, query, toast, product})

export default rootReducer