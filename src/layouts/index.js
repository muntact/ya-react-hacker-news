import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const routeStyle = {
  color: 'black',
  textDecoration: 'none',
}

const activeStyle = {
  color: 'white',
}

const linkProps = {
  style: routeStyle,
  activeStyle,
}

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
        { /* TODO: Make a wrapping component that takes links and returns an array of fragment with bar spacing for (n -1) */}
        <Link to="/newest" {...linkProps}>new</Link>{` | `} 
        <Link to="/newcomments" {...linkProps}>comments</Link>{` | `} 
        <Link to="/show" {...linkProps}>show</Link>{` | `} 
        <Link to="/ask" {...linkProps}>ask</Link>{` | `} 
        <Link to="/jobs" {...linkProps}>jobs</Link>{` | `} 
        <Link to="/submit" {...linkProps}>submit</Link>
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
