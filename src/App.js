import React, { Component } from 'react';
import { 
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  injectIntl,
} from 'react-intl';

import messages from './messages';
import data from './data';

class App extends Component {
  render() {
    // console.log(this.props);
    const { intl } = this.props;
    return (
      <div>
        <header>
          <h1>
           <FormattedMessage id="detail.reviewsHeading"/>
          </h1>
        </header>
        <p><FormattedMessage id="detail.author" values={{ author: <b>Yasser</b> }}/></p>
        <p><FormattedMessage id="detail.averageRating" values={{ avg: '10', count: data[0].reviews }}/></p>
        <p><FormattedMessage id="detail.purchase"/></p>
        <br />
        <br />
        <FormattedHTMLMessage id="detail.window" values={{ numMerchants: 10 }} />
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
          value={data[0].price[intl.locale]}
          style="currency"
          currencyDisplay="symbol"
          currency={intl.locale === 'en-US' ? 'USD' : 'EUR'}
        />
        <br />
        <br />
        <button>
          <FormattedMessage id="detail.toggle" />
        </button>
        <br />
        <br />
        <textarea placeholder={intl.formatMessage({ id: 'detail.placeholder' })}>
        </textarea>
      </div>
    );
  }
}

export default injectIntl(App);
