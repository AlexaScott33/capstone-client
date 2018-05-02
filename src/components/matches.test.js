import React from 'react';
import { shallow } from 'enzyme';

import { Matches } from './matches';

describe('<Matches />', () => {
    it('Renders without crashing', () => {
        shallow(<Matches matches={[]} dispatch={() => {}}/>);
    });
});