import React from 'react';

export default function CommentList({ comments }) {
    if (comments.length === 0) {
        return <p style={{ padding: '20px', color: '#666' }}>No comments yet. Be the first to share your thoughts!</p>;
    }

    return (
        <div className="comments-list" style={{ display: 'flex' }}>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <img className="comment-avatar" src="https://randomuser.me/api/portraits/lego/1.jpg" alt="avatar" />
                    <div className="comment-content">
                        <div className="comment-name">{comment.author}</div>
                        <div className="comment-text">{comment.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}