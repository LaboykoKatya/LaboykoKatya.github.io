import React, { useState } from 'react';

export default function ArticleCard({ article, bgColor }) {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    return (
        <article className={`card ${isLiked ? 'liked' : ''}`} style={{ background: bgColor }}>
            <img src={article.img} alt={article.title} />
            <div className="card-content">
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <span className="date">{article.date}</span>
                
                <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                    <span className="heart">{isLiked ? '❤' : '♡'}</span>
                    <span className="like-text">Like</span>
                    <span className="like-count">{likes}</span>
                </button>
            </div>
        </article>
    );
}