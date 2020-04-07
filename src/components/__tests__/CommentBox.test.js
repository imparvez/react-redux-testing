import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {
    // Full Mount or mount will out <CommentBox /> into fake DOM and returned it to
    // wrapped variable.
    wrapped = mount(<CommentBox />);
})

it('shows a textarea and button', () => {
    // Best way to console log here in test files.
    // console.log(wrapped.find('textarea').length);
    // console.log(wrapped.find('button').length);

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

// Component Clean Up
afterEach(() => {
    wrapped.unmount();
});