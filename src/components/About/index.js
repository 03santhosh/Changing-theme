import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBgClassName}`}>
            <img className="page-image" src={aboutImgUrl} alt="about" />
            <h1 className={`page-text ${aboutTextClassName}`}>About</h1>
          </div>
        </>
      )
   }}
  </ThemeContext.Consumer>
)

export default About
