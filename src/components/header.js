import { Link } from "gatsby"
import React from "react"
import "./Header.css"


class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
      } else {
      this.setState({ hasScrolled: false })
      }
    }
  
  
    render() {
      return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo.svg')} width="217" alt="Marta Muniz - Graphic designer and illustrator logo"/></Link>  
          <div className="Navigation">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="HeaderGroupResponsive">
          <Link to="/"><img src={require('../images/logo_responsive.svg')} width="30" alt="Marta Muniz - Graphic designer and illustrator logo" /></Link>  
          <Link to="/work">Work</Link>
          <Link to="/info">About</Link>
        </div>
      </div>
    )
  }
}

export default Header