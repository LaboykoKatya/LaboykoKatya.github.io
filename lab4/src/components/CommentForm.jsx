import React, { useState } from 'react';

export default function CommentForm({ onAddComment }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) {
            alert("Please write a comment");
            return;
        }
        
        // Передаємо тільки текст, автора додамо в Publication
        onAddComment(text); 
        setText('');
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <textarea 
                placeholder="Write a comment..." 
                value={text} 
                onChange={e => setText(e.target.value)}
            />
            <button type="submit" className="comment-btn">Post Comment</button>
        </form>
    );
}