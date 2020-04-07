import React from 'react'
import ReactDOM from 'react-dom'

import { App } from '../App'

/***
 * Test Structure
 * it('description of the test', 'function containing our test logic')
 * it: Global Function
 * First Parameter: String description of the test we're running
 * Second Parameter: Stuff to do when this tests run
 */
it('shows a comment box', () => {
    // Create a new div element
    const div = document.createElement('div');

    // With the help of JSDOM, mount App into newly created div element.
    // JSDOM is a library which interpret browser into command line.
    ReactDOM.render(<App />, div);

    // Looks inside the div and checks if the CommentBox is in there or not.
    /**
     * Test Structure
     * expect("value that we're inspecting").match statement("value that we expect to see");
     * expect: Global Function.
     * value that we're inspecting: The thing we want to verify.
     * match statement: Designates how we want to inspect the subject.
     * value that we expect to see: Expected values, its what we want our 'subject' to be.
     */
    expect(div.innerHTML).toContain("I'm comment bo");

    // After everything is done, clean that div by removing App component
    ReactDOM.unmountComponentAtNode(div);
});