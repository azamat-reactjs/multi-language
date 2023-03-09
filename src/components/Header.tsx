import { FC, useState, useCallback, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import { setLanguage } from '../store/actions/langActions'
import { translate } from '../i18n'

interface HeaderProps {
  fixed?: boolean
  transparent?: boolean
}

export const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { language } = useSelector((state: RootState) => state.lang)
  const dispatch = useDispatch()
  const dropdownEl = useRef<HTMLUListElement>(null)

  let headerClass = 'header'

  if (fixed) {
    headerClass += ' header--fixed'
  }

  if (transparent) {
    headerClass += ' header--transparent'
  }

  const handleClickOutside = useCallback((e) => {
    if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(true)
    }
  }, [showDropdown, setShowDropdown, dropdownEl])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false)
    dispatch(setLanguage(value))
  }

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header__brand">
          <h1>
            <Link to="/">React</Link>
          </h1>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">{translate('home', language)}</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/about">{translate('about', language)}</NavLink>
            </li>
          </ul>
        </nav>

        <div className="language">
          <ul className="language__list">
            <li className="language__item">
              <span className="selected" onClick={() => setShowDropdown(true)}>{language}</span>
              {
                showDropdown &&
                <ul className="dropdown" ref={dropdownEl}>
                  <li className="dropdown__item" onClick={() => chooseLanguageHandler('EN')}>
                    EN
                  </li>
                  <li className="dropdown__item" onClick={() => chooseLanguageHandler('UZ')}>
                    UZ
                  </li>
                  <li className="dropdown__item" onClick={() => chooseLanguageHandler('RU')}>
                    RU
                  </li>
                </ul>
              }
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}