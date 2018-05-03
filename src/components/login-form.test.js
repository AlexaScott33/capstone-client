import React from 'react';
import { shallow } from 'enzyme';

import { LoginForm } from './login-form';
import { login } from '../actions/auth';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm handleSubmit={() => {}} />);
    });

    it('Renders the header', () => {
        const header = 'Existing Users Login';
        const wrapper = shallow(<LoginForm handleSubmit={() => {}} />);
        expect(wrapper.contains(<h3>{header}</h3>)).toEqual(true);
    });

    it('Dispatches login from login when form is submitted', () => {

    });
});