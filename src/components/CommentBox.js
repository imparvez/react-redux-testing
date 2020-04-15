import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions';

// Test Cases for CommentBox
// - Shows a textarea and button.
// - User can enter text into textarea and submit it.
// - When the input is submitted, textarea should get empty. 

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = (e) => {
        this.setState({ comment: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // TODO - Call an action creator and save the comment
        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { saveComment })(CommentBox)