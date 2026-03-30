import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Звертаємося до Firebase для створення користувача
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Реєстрація успішна!");
            navigate('/'); // Перекидаємо на головну сторінку
        } catch (err) {
            setError("Помилка реєстрації: " + err.message);
        }
    };

    return (
        <div className="container" style={{ marginTop: '100px', maxWidth: '500px', minHeight: '60vh' }}>
            <h2 className="section-title" style={{ marginTop: '0', marginBottom: '30px' }}>Sign Up</h2>
            
            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

            <form onSubmit={handleRegister} className="comment-form">
                <div className="comment-user">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="comment-user" style={{ marginTop: '10px' }}>
                    <input 
                        type="password" 
                        placeholder="Create a password (min 6 chars)" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn" style={{ marginTop: '20px' }}>Register</button>
            </form>
        </div>
    );
}