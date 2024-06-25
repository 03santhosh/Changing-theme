import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'notfound-bg-dark'
        : 'notfound-bg-light'
      return (
        <>
          <Navbar />
          <div className={`notfound-container ${notFoundBgClassName}`}>
            <img
              className="notfound-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className="notfound-heading">Lost Your Way?</h1>
            <p className="notfound-para">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
