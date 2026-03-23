import React, { useState } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

export default function Publication() {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleAddComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    const handleMainLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    return (
        <section id="publication" className="container">
            <h2 className="section-title">A Moment in France</h2>

            <article className="travel-article">
                <div className="article-header">
                    <h3>Morning Light in Paris</h3>
                    <p className="article-meta">by Anna Traveler • May 2026</p>
                    <button className={`like-btn main-like ${isLiked ? 'liked' : ''}`} onClick={handleMainLike}>
                        <span className="heart">{isLiked ? '❤' : '♡'}</span>
                        <span className="like-text">Like</span>
                        <span className="like-count">{likes}</span>
                    </button>
                </div>

                <p>
                    Paris wakes slowly. Early in the morning the streets are still quiet,
                    the cafés are only starting to open and the smell of fresh croissants
                    floats through the air.
                </p>

                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" alt="Paris 1" />

                <p>
                    Walking along the Seine feels like moving through a film scene.
                    Soft golden light touches the old buildings and the bridges reflect
                    in the water.
                </p>

                <blockquote>
                    Travel is not just about places — it’s about the feeling a city leaves inside you.
                </blockquote>

                <p>
                    Every street in Paris tells a story: small bookstores,
                    hidden courtyards and cafés where people sit for hours
                    watching the city move around them.
                </p>

                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80" alt="Paris 2" />

                <p>
                    By evening the city changes again. Lights appear on the bridges,
                    music comes from open windows and the streets feel alive.
                </p>
            </article>

            <div className="comments-section">
                <div className="comments-header">
                    <h3>Comments ({comments.length})</h3>
                    <button onClick={() => setShowComments(!showComments)} className="comments-toggle">
                        💬 {showComments ? 'Hide comments' : 'Show comments'}
                    </button>
                </div>

                {showComments && (
                    <>
                        <CommentList comments={comments} />
                        <CommentForm onAddComment={handleAddComment} />
                    </>
                )}
            </div>
        </section>
    );
}