import commentReducer from 'reducers/comment';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    // Dummy Action
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    // Calling commentReducer function with empty state and mock action.
    const newState = commentReducer([], action);

    expect(newState).toEqual(['New Comment'])
})