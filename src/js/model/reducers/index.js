import { combineReducers } from 'redux'
import auth from './mine/auth'
import query from './mine/query'

const rootReducer = combineReducers({auth, query})

export default rootReducer