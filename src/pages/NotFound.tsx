import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { translate } from "../i18n"
import { RootState } from "../store"

export const NotFound: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang)

  return (
    <div className="page-404">
      <div className="container">
        <h1>404</h1>
        <p>{translate('pageDoesNotExist', language)}</p>
        <div>
          <Link to="/">{translate('returnToHomepage', language)}</Link>
        </div>
      </div>
    </div>
  )
}