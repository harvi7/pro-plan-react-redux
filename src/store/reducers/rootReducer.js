import authReucer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({ 
    auth: authReucer,
    project: projectReducer,
    firestore: firestoreReducer 
})

export default rootReducer