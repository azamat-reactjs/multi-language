import { FC } from 'react'
import { useSelector } from "react-redux"
import { Header } from "../components/Header"
import { translate } from "../i18n"
import { RootState } from "../store"

export const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang)
  
  return (
    <div>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate('about', language)}</h1>
          <p>{translate('aboutUsText', language)}</p>
        </div>
      </section>
    </div>
  )
}