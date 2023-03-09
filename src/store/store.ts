import { createStore, combineReducers } from 'redux'
import langReducer from './reducers/langReducer'

const rootReducer = combineReducers({
  lang: langReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>