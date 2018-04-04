import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div
    css={{
      flex: 1,
    }}
  >
    <Helmet
      title="Mike Mathew | Portfolio"
      meta={[
        { name: 'description', content: 'Front end portfolio for Mike Mathew' },
        { name: 'keywords', content: 'front end, code, JavaScript, reactjs, gatsbyjs, texas, dallas' },
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
