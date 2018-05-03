import React from 'react';
import HomePage from './homepage';
import { shallow } from 'enzyme';

describe('<HomePage />', () => {
    it('Renders without crashing', () => {
        shallow(<HomePage />);
    });

    it('Renders the title', () => {
        const title = 'WPL Rugby Commentators';
        const wrapper = shallow(<HomePage />);
        expect(wrapper.contains(<header role="banner"><h1>{title}</h1></header>)).toEqual(true);
    });
});