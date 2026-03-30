import React, { useState, useEffect } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
// ДОДАЄМО ІМПОРТИ FIREBASE
import { db } from '../firebase';
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore';

export default function Publication({ user }) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    // ФУНКЦІЯ ЧИТАННЯ КОМЕНТАРІВ З БАЗИ
    const fetchComments = async () => {
        try {
            const q = query(collection(db, "comments"), orderBy("timestamp", "asc"));
            const querySnapshot = await getDocs(q);
            const commentsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(commentsData);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    // Завантажуємо коментарі при відкритті сторінки
    useEffect(() => {
        fetchComments();
    }, []);

    // ФУНКЦІЯ ЗАПИСУ НОВОГО КОМЕНТАРЯ В БАЗУ
    const handleAddComment = async (commentText) => {
        try {
            await addDoc(collection(db, "comments"), {
                author: user.email, // Беремо email залогіненого користувача
                text: commentText,
                timestamp: Date.now()
            });
            fetchComments(); // Оновлюємо список після додавання
        } catch (error) {
            alert("Error adding comment: " + error.message);
        }
    };

    const handleLikeClick = () => {
        if (!user) {
            alert("Please log in to like this publication!");
            return;
        }
        alert("You liked this post!");
    };

    return (
        <section id="publication" className="container" style={{ marginTop: '100px' }}>
            <h2 className="section-title">A Moment in France</h2>

            <article className="travel-article">
                <div className="article-header">
                    <h3>Morning Light in Paris</h3>
                    <p className="article-meta">by Anna Traveler • May 2026</p>
                    <button className="like-btn main-like" onClick={handleLikeClick}>
                        <span className="heart">♡</span> <span className="like-text">Like</span>
                    </button>
                </div>

                <p>Paris wakes slowly. Early in the morning the streets are still quiet...</p>
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" alt="Paris" />
                <p>Walking along the Seine feels like moving through a film scene.</p>
                <blockquote>Travel is not just about places — it’s about the feeling a city leaves inside you.</blockquote>
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80" alt="Paris" />
            </article>

            {/* СЕКЦІЯ КОМЕНТАРІВ З ТОГЛОМ */}
            <div className="comments-section" style={{ paddingBottom: '50px' }}>
                <div className="comments-header">
                    <h3>Comments ({comments.length})</h3>
                    <button 
                        className="comments-toggle" 
                        onClick={() => setShowComments(!showComments)}
                    >
                        {showComments ? "▲ Hide comments" : "💬 Show comments"}
                    </button>
                </div>

                {showComments && (
                    <div className="comments-appearance-wrapper">
                        <CommentList comments={comments} />

                        {user ? (
                            <CommentForm onAddComment={handleAddComment} />
                        ) : (
                            <div className="login-warning" style={{ padding: '20px', background: 'white', borderRadius: '15px', textAlign: 'center', marginTop: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                <p style={{ color: 'var(--navy)', fontWeight: 'bold' }}>Please log in to comment</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}