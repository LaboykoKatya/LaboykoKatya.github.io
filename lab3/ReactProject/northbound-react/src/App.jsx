import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Publication from './pages/Publication';
import './index.css'; // Твій файл зі стилями

export default function App() {
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
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/publication" element={<Publication />} />
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