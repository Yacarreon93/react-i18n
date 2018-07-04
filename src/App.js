import React, { Component } from 'react';
import { 
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
} from 'react-intl';

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
        <br />
        <br />
        <FormattedHTMLMessage id="detail.window" values={{ numMerchands: 10 }} />
        <br />
        <br />
        <br />
        <FormattedDate 
          value={new Date(1459913574887)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
        <br />
        <br />
        <FormattedTime
          value={new Date(1459913574887)}
          year='2-digit'
          month='2-digit'
          day='2-digit'
        />
        <br />
        <br />
        <button>
          <FormattedMessage id="detail.toggle"/>
        </button>
      </div>
    );
  }
}

export default App;
