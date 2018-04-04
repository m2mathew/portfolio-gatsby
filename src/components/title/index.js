// External Dependencies
import React from 'react';

// Local Variables
const titleStyles = {
  width: '100%',
	marginTop: '5em',
	marginBottom: '0.5em',
	padding: '0.5em auto',
	borderBottom: '6px solid gray',
};

const h1Styles = {
  fontFamily: 'Open Sans, sans-serif',
	fontWeight: '300',
	textTransform: 'uppercase',
	fontSize: 30,
	textAlign: 'center',
};

const h3Styles = {
  fontFamily: 'Open Sans, sans-serif',
	fontWeight: 100,
	textTransform: 'lowercase',
	fontSize: 22,
	marginBottom: '1.5em',
	marginLeft: '0.3em',
	textAlign: 'center',
};

// Component Definition
const Title = () => (
  <div css={titleStyles}>
    <h1 css={h1Styles}>
      Mike Mathew
    </h1>
    <h3 css={h3Styles}>
      front end web developer
    </h3>
  </div>
);

export default Title;
