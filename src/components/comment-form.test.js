import React from 'react';
import { shallow, mount } from 'enzyme';

import { CommentForm } from './comment-form';
import { fetchComment, addComment } from '../actions/comments';


describe('<CommentForm />', () => {
    const seedComments = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedComments.push({
                content: `Comment ${i}`
            });
        }
    });

    it('Renders without crashing', () => {
        shallow(<CommentForm comments={[]} dispatch={() => {}} />);
    });

    it('Renders the title', () => {
        const title = 'See what people are saying about the match:';
        const wrapper = shallow(<CommentForm comments={[]} dispatch={() => {}} />);
        expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
    });
});