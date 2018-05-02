import React from 'react';
import { shallow } from 'enzyme';

import { Match } from './match';

describe('<Match />', () => {
    it('Renders without crashing', () => {
        shallow(<Match matchObj={{}} />);
    });
});