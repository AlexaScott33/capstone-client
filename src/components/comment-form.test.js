import React from 'react';
import { CommentForm } from './comment-form';
import { shallow, mount } from 'enzyme';

describe('<CommentForm />', () => {
    it('Should render without crashing', () => {
        shallow(<CommentForm comments={[]} dispatch={() => {}} />);
    });
});