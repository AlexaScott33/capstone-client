import React from 'react';
import { CommentForm } from './comment-form';
import { shallow, mount } from 'enzyme';

describe('<CommentForm />', () => {
    // const seedComments = [];
    // beforeAll(() => {
    //     for
    // });

    it('Renders without crashing', () => {
        shallow(<CommentForm comments={[]} dispatch={() => {}} />);
    });

    // it('Renders the comments', () => {

    // });

    it('Renders the title', () => {
        const title = 'See what people are saying about the match:';
        const wrapper = shallow(<CommentForm comments={[]} dispatch={() => {}} />);
        expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
    });


});