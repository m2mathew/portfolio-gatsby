// External Dependencies
import React from 'react'
import Link from 'gatsby-link'

// Internal Dependencies
import About from '../components/about';
import Title from '../components/title';

// Component Definition
const IndexPage = () => (
  <div>
    <Title />
    <About />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
