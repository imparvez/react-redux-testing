import React from 'react'
import { CommentBox } from './CommentBox'
import { CommentList } from './CommentList'

export const App = () => {
    return (
        <div>
            I'm the App component
            <CommentBox />
            <CommentList />
        </div>
    )
}
