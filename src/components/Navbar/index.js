import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }

      const websiteImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navBgClassName = isDarkTheme ? 'bg-dark' : 'bg-light'

      const navTextClassName = isDarkTheme ? 'light-text' : 'dark-text'

      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navBgClassName}>
          <img
            src={websiteImgUrl}
            alt="website logo"
            className="website-theme-image"
          />
          <ul className="link-container">
            <Link to="/" className="links">
              <li className={`link-list ${navTextClassName}`}>Home</li>
            </Link>
            <Link to="/about" className="links">
              <li className={`link-list ${navTextClassName}`}>About</li>
            </Link>
          </ul>
          <button type="button" onClick={onClickTheme} data-testid="theme">
            <img
              src={themeImgUrl}
              alt="theme"
              className="website-theme-image"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
