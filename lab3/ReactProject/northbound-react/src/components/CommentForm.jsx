import React, { useState } from 'react';

export default function CommentForm({ onAddComment }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) {
            alert("Please fill all fields");
            return;
        }
        
        onAddComment({ id: Date.now(), name, text });
        setName('');
        setText('');
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="comment-user">
                <input 
                    type="text" 
                    placeholder="Your name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
            </div>
            <textarea 
                placeholder="Write a comment..." 
                value={text} 
                onChange={e => setText(e.target.value)}
            />
            <button type="submit" className="comment-btn">Post Comment</button>
        </form>
    );
}