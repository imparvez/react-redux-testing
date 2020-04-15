import React from 'react'
import { shallow } from 'enzyme'

import { App } from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

// Over here, we are using beforeEach to initiate common pattern from both
// the test cases i.e initiating wrapped variable with <App /> component.
beforeEach(() => {
    wrapped = shallow(<App />);
});

/***
 * Test Structure
 * it('description of the test', 'function containing our test logic')
 * it: Global Function
 * First Parameter: String description of the test we're running
 * Second Parameter: Stuff to do when this tests run
 */
it('shows a comment box', () => {
    // Create a new div element
    // const div = document.createElement('div');

    // With the help of JSDOM, mount App into newly created div element. JSDOM is a library which interpret browser into command line.
    // ReactDOM.render(<App />, div);

    // Looks inside the div and checks if the CommentBox is in there or not.
    /**
     * Test Structure
     * expect("value that we're inspecting").match statement("value that we expect to see");
     * expect: Global Function.
     * value that we're inspecting: The thing we want to verify.
     * match statement: Designates how we want to inspect the subject.
     * value that we expect to see: Expected values, its what we want our 'subject' to be.
     */
    // expect(div.innerHTML).toContain("I'm comment bo");
    // Above expect statement is not the right way to detect the presence of the component i.e CommentBox.

    // After everything is done, clean that div by removing App component
    // ReactDOM.unmountComponentAtNode(div);

    // Refactor using Enzyme:
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});
