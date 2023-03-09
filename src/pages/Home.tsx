import { FC } from 'react'
import { useSelector } from "react-redux"
import { Header } from "../components/Header"
import { translate } from "../i18n"
import { RootState } from "../store"

export const Home: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang)

  return (
    <div>
      <Header fixed transparent />
      <section className="home">
        <div className="home__overlay"></div>
        <div className="home__body">
          <h1>{translate('home', language)}</h1>
          <p>{translate('introText', language)}</p>
        </div>
      </section>
    </div>
  )
}