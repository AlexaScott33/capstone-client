import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header';

describe('<Header />', () => {
    it('Should render without crashing', () => {
        shallow(<Header />);
    });

    it('Should fire the logOut callback when the button is clicked', () => {

    });

    it('Should direct you to /signup when the button is clicked', () => {

    });



});