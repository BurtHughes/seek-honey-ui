import { combineReducers } from 'redux'
import auth from './mine/auth'
import query from './mine/query'
import toast from './common'

const rootReducer = combineReducers({auth, query, toast})

export default rootReducer