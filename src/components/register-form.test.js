import React from 'react';
import { shallow } from 'enzyme';

import RegisterForm from './register-form';

describe('<RegisterForm />', () => {
    it('Should render without crashing', () => {
        shallow(<RegisterForm />);
    });



});