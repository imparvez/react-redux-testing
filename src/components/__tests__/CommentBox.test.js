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
    // For failure: expect(wrapped.find('textarea').length).toEqual(2);
    expect(wrapped.find('button').length).toEqual(1);
    // For failure: expect(wrapped.find('button').length).toEqual(12);
});

describe('the text area operation', () => {
    // Over here, this test is more of an interacting task.
    // Simulating Events
    // 1. Find the textarea elements
    // 2. Simulate a 'change' event [https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html]
    // 3. Provide a fake event object
    // 4. Force the component to update [https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/update.html]
    // 5. Assert that the textarea value changed. [https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/prop.html]
    beforeEach(() => {
        wrapped
            .find('textarea') // 1
            .simulate('change', { target: { value: 'Test comment'}}); // 2 & 3
        wrapped.update(); // 4: immediately re-render the component after receiving the value of the textarea.
    })

    it('has a textarea that users can type in', () => {
        // 5. making sure that textarea is receiving the correct data/text/string
        expect(wrapped.find('textarea').prop('value')).toEqual('Test comment');
        // For failure: expect(wrapped.find('textarea').prop('value')).toEqual('sadjfhasjkd sadkjfhkst');
    });
    
    // When the input is submitted, textarea should be empty.
    it('should make textarea empty when input is submitted', () => {
        wrapped
            .find('form')
            .simulate('submit');
        wrapped.update();
    
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})


// Component Clean Up
afterEach(() => {
    wrapped.unmount();
});