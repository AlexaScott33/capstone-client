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

    // it('Dispatches fetchComment from fetchComment', () => {
        
    // });

    //use on click instead of onsubmit
    //declare function --> addComment to make testable
    //tests work well with 
    // it('Dispatches addComment when form is submitted', () => {
    //     const dispatch = jest.fn();
    //     const index = 3;
    //     const wrapper = shallow(
    //         <CommentForm comments={[]} index={index} dispatch={dispatch} />
    //     );
    //     const instance = wrapper.instance();
    //     const content = seedComments[0].content;
    //     instance.addComment(content);
    //     expect(dispatch).toHaveBeenCalledWith(addComment(content, index));
    // });

    // it('Renders the comments', () => {

    // });

});