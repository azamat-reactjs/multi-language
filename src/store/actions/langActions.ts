import { TLanguageAction } from '../../models/TLanguageAction'
import { EStoreTypes } from '../../models/EStoreTypes'

export const setLanguage = (lang: string): TLanguageAction => {
  localStorage.setItem('language', lang)
  return {
    type: EStoreTypes.SET_LANGUAGE,
    payload: lang
  }
}