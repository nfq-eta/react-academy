import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import {AppDisconnected as App} from '../index';

describe('App', () => {
  it('match a snapshot', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
