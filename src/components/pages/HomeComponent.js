'use strict';

import React from 'react';

require('styles/pages/Home.css');

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home-component">
        <h1>Hello Home!</h1>
      </div>
    );
  }
}

HomeComponent.displayName = 'PagesHomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
