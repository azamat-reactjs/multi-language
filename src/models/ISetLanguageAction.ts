import { EStoreTypes } from "./EStoreTypes"

export interface ISetLanguageAction {
  type: typeof EStoreTypes.SET_LANGUAGE
  payload: string
}