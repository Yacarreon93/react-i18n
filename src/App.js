import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
           <FormattedMessage id="detail.reviewsHeading"/>
          </h1>
        </header>
        <p><FormattedMessage id="detail.author" values={{ author: <b>Yasser</b> }}/></p>
        <p><FormattedMessage id="detail.averageRating" values={{ avg: '10' }}/></p>
        <p><FormattedMessage id="detail.purchase"/></p>
        <button>
          <FormattedMessage id="detail.toggle"/>
        </button>
      </div>
    );
  }
}

export default App;
