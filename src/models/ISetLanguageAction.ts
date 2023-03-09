import { storeTypes } from "./storeEnums"

export interface ISetLanguageAction {
  type: typeof storeTypes.SET_LANGUAGE
  payload: string
}