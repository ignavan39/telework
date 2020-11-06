import {createStore} from 'redux'
import { answersReducer } from './answersReducer'

export const store = createStore(answersReducer)