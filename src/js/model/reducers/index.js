import { combineReducers } from 'redux'
import tab from './common/tab'
import toast from './common/toast'
import path from './common/path'
import auth from './mine/auth'
import query from './mine/query'
import product from './home/product'

const rootReducer = combineReducers({ tab, toast, path, auth, query, product })

export default rootReducer