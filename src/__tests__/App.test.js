import React from 'react';
import { mountWithIntl, shallowWithIntl} from '../intl-enzyme';
import toJson, { renderToJson } from 'enzyme-to-json';

import App from '../App';

Date.now = jest.fn((() => 1459913574887))

let wrapper = null;

describe('app', () => {
  
  it('Render expected markup', () => {
    wrapper = mountWithIntl(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

describe('intl messages', () => {
  beforeEach(() => {
    wrapper = shallowWithIntl(<App />).first().shallow();
  });
  
  it('Renders a single purchase message', () => {
    expect(wrapper.find({ id: 'detail.purchase' })).toHaveLength(1);
  });

  it('Passes the num of merchants to "new window" message', () => {
    expect(wrapper.find({ id: 'detail.window' }).prop('values')).toMatchObject({ numMerchants: 10 });
  });

});