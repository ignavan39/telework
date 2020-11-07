import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { answersReducer } from './answersReducer'

export const store = createStore(answersReducer,compose(
    applyMiddleware(thunk,logger)
))