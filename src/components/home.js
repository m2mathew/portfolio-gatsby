// External Dependencies
import React from 'react';

// Internal Dependencies
import Title from './title';
import About from './about';
import Work from './work';

// Component Definition
const Home = () => (
  <section className="home-box row col-sm-12">
    <Title />
    <About />
    <Work />
  </section>
);

export default Home;
