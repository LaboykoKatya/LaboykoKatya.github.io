import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';

// Твій оригінальний масив статей
const initialArticles = [
    { id: 1, title: "Mountain Escape", text: "Silence, altitude and endless horizons.", date: "March 2026", dateForSort: "2026-03-01", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80" },
    { id: 2, title: "Ocean Diaries 2", text: "Salt air and golden reflections.", date: "April 2026", dateForSort: "2026-04-01", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
    { id: 3, title: "City Stories", text: "Architecture, rhythm and timeless streets.", date: "May 2026", dateForSort: "2026-05-01", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80" }
];

export default function Articles() {
    const [articles, setArticles] = useState(initialArticles);
    const [sortOrder, setSortOrder] = useState('newest');

    const handleSort = () => {
        const newOrder = sortOrder === 'newest' ? 'oldest' : 'newest';
        setSortOrder(newOrder);

        const sorted = [...articles].sort((a, b) => {
            const dateA = new Date(a.dateForSort);
            const dateB = new Date(b.dateForSort);
            return newOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
        
        setArticles(sorted);
    };

    return (
        <section id="articles" className="container">
            <h2 className="section-title">Latest Adventures</h2>
            
            <button onClick={handleSort} className="btn" style={{ marginBottom: '40px', display: 'inline-block' }}>
                Sort by Date: {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>
            
            <div className="articles-container">
                {/* Використовуємо індекс (index), щоб фарбувати кожну другу картку */}
                {articles.map((article, index) => (
                    <ArticleCard 
                        key={article.id} 
                        article={article} 
                        bgColor={index % 2 === 0 ? "#fffaf3" : "#ffffff"} 
                    />
                ))}
            </div>
        </section>
    );
}