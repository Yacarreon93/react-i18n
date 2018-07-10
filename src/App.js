import React, { Component } from 'react';
import { 
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
} from 'react-intl';

import messages from './messages';

let locale = 
    (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US';

if (!messages[locale]) locale = 'en-US';

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
        <FormattedRelative 
          value={new Date(1459913574887)}
          // updateInterval={1000}
          style="numeric"
        />
        <br />
        <br />
        <FormattedNumber  
          value={messages[locale].detail.price[locale]}
          style="currency"
          currencyDisplay="symbol"
          currency={locale === 'en-US' ? 'USD' : 'EUR'}
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
