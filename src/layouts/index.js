import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const routeStyle = {
  color: 'black',
  textDecoration: 'none',
};

const Header = () => (
  <div
    style={{
      background: '#ff6600',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        Hacker News Clone
        </Link>
        </h1>
        <Link to="/newest" style={routeStyle}>new</Link>{` | `} 
        <Link to="/newcomments" style={routeStyle}>comments</Link>{` | `} 
        <Link to="/show" style={routeStyle}>show</Link>{` | `} 
        <Link to="/ask" style={routeStyle}>ask</Link>{` | `} 
        <Link to="/jobs" style={routeStyle}>jobs</Link>{` | `} 
        <Link to="/submit" style={routeStyle}>submit</Link>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
