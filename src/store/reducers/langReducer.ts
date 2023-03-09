import { EStoreTypes } from '../../models/EStoreTypes'
import { ILanguageState } from '../../models/ILanguageState'
import { TLanguageAction } from '../../models/TLanguageAction'

const localStorageLanguage = localStorage.getItem('language')

const initialState: ILanguageState = {
  language: localStorageLanguage ? localStorageLanguage : 'EN'
}

const langReducer = (state = initialState, action: TLanguageAction) => {
  switch (action.type) {
    case EStoreTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}

export default langReducer