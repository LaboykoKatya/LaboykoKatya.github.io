import React, { useState } from 'react';

export default function ArticleCard({ article, user }) {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        // ОСЬ ТУТ БЛОКУВАННЯ: якщо немає user, видаємо помилку і зупиняємось
        if (!user) {
            alert("Тільки авторизовані користувачі можуть ставити лайки!");
            return; 
        }

        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    return (
        <div className={`card ${isLiked ? 'liked' : ''}`}>
            <img src={article.img || article.image} alt={article.title} />
            <div className="card-content">
                <span className="date">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.text || article.description}</p>
                
                <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                    <span className="heart">❤</span> {likes}
                </button>
            </div>
        </div>
    );
}