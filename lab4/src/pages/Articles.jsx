import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function Articles({ user }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('newest');

    // Початкові дані (тільки якщо база порожня)
    const initialArticles = [
        { title: "Mountain Escape", text: "Silence, altitude and endless horizons.", date: "March 2026", dateForSort: "2026-03-01", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80" },
        { title: "Ocean Diaries 2", text: "Salt air and golden reflections.", date: "April 2026", dateForSort: "2026-04-01", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
        { title: "City Stories", text: "Architecture, rhythm and timeless streets.", date: "May 2026", dateForSort: "2026-05-01", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80" }
    ];

    const fetchArticles = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "articles"));
            const articlesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            // Відразу сортуємо при завантаженні (спочатку нові)
            const sortedInitial = articlesData.sort((a, b) => new Date(b.dateForSort) - new Date(a.dateForSort));
            setArticles(sortedInitial);
        } catch (error) {
            console.error("Помилка завантаження:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchArticles(); }, []);

    // ТВОЯ ФУНКЦІЯ СОРТУВАННЯ
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

    // Функція для наповнення бази (якщо порожня)
    const seedDatabase = async () => {
        try {
            for (const article of initialArticles) {
                await addDoc(collection(db, "articles"), article);
            }
            alert("Articles added to Firebase!");
            fetchArticles();
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <section id="articles" className="container" style={{ marginTop: '100px' }}>
            <h2 className="section-title">Latest Adventures</h2>
            
            <div style={{ marginBottom: '40px', display: 'flex', gap: '20px' }}>
                {/* Кнопка сортування */}
                <button onClick={handleSort} className="btn">
                    Sort by Date: {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                </button>

                {/* Кнопка наповнення бази (зникне, коли статті з'являться) */}
                {articles.length === 0 && !loading && (
                    <button onClick={seedDatabase} className="btn" style={{ background: 'var(--accent)' }}>
                        Seed Firebase DB
                    </button>
                )}
            </div>

            {loading ? (
                <p>Loading from Firebase...</p>
            ) : (
                <div className="articles-container">
                    {articles.map((article, index) => (
                        <ArticleCard 
                            key={article.id} 
                            article={article} 
                            user={user}
                            // Твій пропс для кольору
                            bgColor={index % 2 === 0 ? "#fffaf3" : "#ffffff"} 
                        />
                    ))}
                </div>
            )}
        </section>
    );
}