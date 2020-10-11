import authReucer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ 
    auth: authReucer,
    project: projectReducer 
})

export default rootReducer