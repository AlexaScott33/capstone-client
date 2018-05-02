import React from 'react';
import { shallow } from 'enzyme';

import { RegisterForm } from './register-form';

describe('<RegisterForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RegisterForm handleSubmit={() => {}} />);
    });

    // it('Should add a f', () => {
    //     shallow(<RegisterForm />);
    // });

    // it('Should register a new user when form is submitted', () => {
    //     const wrapper = shallow(<RegisterForm handleSubmit={() => {}} />);
    //     console.log(wrapper.debug());
    // });



});