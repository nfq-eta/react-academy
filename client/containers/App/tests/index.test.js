import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AppDisconnected as App } from '../index';


describe('App', () => {

    let wrapper = {};

    beforeEach(() => {
        const props = {
            main: {
                value: 5
            }
        };
        wrapper = shallow(<App {...props} />);
    });

    it ('not crash', () => {
        expect(wrapper);
    });

    it('match a snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('match a snapshot 2', () => {
        const props = {
            main: () => {}
        };
        wrapper = shallow(<App {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('clear state', () => {
        wrapper.instance().onRemoveAllCards();

        expect(wrapper.state()).toEqual({ cards: [] });
    });

    it('have initial state', () => {
        expect(wrapper.state()).toEqual({ cards: [ { value: 1 } ] });
    });

});


