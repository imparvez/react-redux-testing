import React from 'react'
import { shallow } from 'enzyme'

import { App } from '../App'
import { CommentBox } from '../CommentBox'

it('shows a comment box', () => {
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div);

    // expect(div.innerHTML).toContain("I'm comment bo");

    // ReactDOM.unmountComponentAtNode(div);

    // Refactor using Enzyme:
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

// Line: 7
/***
 * Test Structure
 * it('description of the test', 'function containing our test logic')
 * it: Global Function
 * First Parameter: String description of the test we're running
 * Second Parameter: Stuff to do when this tests run
 */

// Line: 8 -> Create a new div element
// Line 10 -> With the help of JSDOM, mount App into newly created div element. JSDOM is a library which interpret browser into command line.
// Line: 12 -> Looks inside the div and checks if the CommentBox is in there or not.
/**
 * Test Structure
 * expect("value that we're inspecting").match statement("value that we expect to see");
 * expect: Global Function.
 * value that we're inspecting: The thing we want to verify.
 * match statement: Designates how we want to inspect the subject.
 * value that we expect to see: Expected values, its what we want our 'subject' to be.
 */

// Line: 13 -> Above expect statement is not the right way to detect the presence of the component i.e CommentBox.
// Line: 14 -> After everything is done, clean that div by removing App component