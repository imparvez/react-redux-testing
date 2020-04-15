import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
    renderComments() {
        return (
            <ul>
                {this.props.comments.map(comment => (
                    <li key={comment}>{comment}</li>
                ))}
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderComments()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)