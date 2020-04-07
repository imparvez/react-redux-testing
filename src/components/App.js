import React from 'react'
import CommentBox from 'components/CommentBox'
import { CommentList } from 'components/CommentList'

export const App = () => {
    return (
        <div>
            I'm the App component
            <CommentBox />
            <CommentList />
        </div>
    )
}
