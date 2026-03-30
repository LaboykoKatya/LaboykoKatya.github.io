import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Travel beyond the ordinary</h1>
                    <p>Stories shaped by movement, light and distance</p>
                    <Link to="/articles" className="btn">Читати статті</Link>
                </div>
            </section>

            <section id="my-posts" className="container">
                <h2 className="section-title">My Posts</h2>
                <div className="posts-grid">
                    {/* Пост 1 */}
                    <div className="post-card">
                        <div className="post-top">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="avatar" alt="author" />
                            <div>
                                <h4>Autumn in Prague</h4>
                                <span>October 2025</span>
                            </div>
                        </div>
                        <p>Golden leaves, medieval streets and quiet cafés along the river.</p>
                        <button className="edit-btn">Edit</button>
                    </div>

                    {/* Пост 2 */}
                    <div className="post-card">
                        <div className="post-top">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="avatar" alt="author" />
                            <div>
                                <h4>Italian Summer</h4>
                                <span>July 2025</span>
                            </div>
                        </div>
                        <p>Gelato, warm evenings and endless piazzas.</p>
                        <button className="edit-btn">Edit</button>
                    </div>

                    {/* Пост 3 */}
                    <div className="post-card">
                        <div className="post-top">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="avatar" alt="author" />
                            <div>
                                <h4>Nordic Lights</h4>
                                <span>January 2026</span>
                            </div>
                        </div>
                        <p>Frozen silence and green waves dancing across the sky.</p>
                        <button className="edit-btn">Edit</button>
                    </div>
                </div>
            </section>
        </>
    );
}