import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Publication from './pages/Publication';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';

export default function App() {
    // Стан для зберігання поточного користувача
    const [user, setUser] = useState(null);

    // Слідкуємо за тим, чи увійшов користувач
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Функція виходу
    const handleLogout = async () => {
        await signOut(auth);
        alert("Ви вийшли з системи.");
    };

    return (
        <Router>
            <header>
                <div className="container header-wrapper">
                    <h1 className="logo">Northbound</h1>
                    <nav>
                        <ul className="nav-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/articles">Articles</Link></li>
                            <li><Link to="/publication">Publication</Link></li>
                            
                            {/* Якщо користувач увійшов - показуємо його email та кнопку Вийти */}
                            {user ? (
                                <>
                                    <li style={{ color: 'var(--sand)', fontWeight: 'bold' }}>{user.email}</li>
                                    <li><button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: '500' }}>Logout</button></li>
                                </>
                            ) : (
                                /* Якщо НЕ увійшов - показуємо посилання на Login та Register */
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Передаємо user у компоненти, щоб потім обмежити лайки/коментарі */}
                    <Route path="/articles" element={<Articles user={user} />} />
                    <Route path="/publication" element={<Publication user={user} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>

            <footer>
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <h2>Northbound</h2>
                        <p>
                            A travel journal about movement, light and distant places.
                            Stories from cities, oceans and quiet mountains.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Explore</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/articles">Articles</Link></li>
                            <li><Link to="/publication">Publication</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Follow</h3>
                        <div className="social-icons">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">Pinterest</a>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Get new travel stories once a month.</p>
                        <div className="newsletter-box">
                            <input type="email" placeholder="Your email" />
                            <button>Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Northbound — Travel Journal</p>
                </div>
            </footer>
        </Router>
    );
}