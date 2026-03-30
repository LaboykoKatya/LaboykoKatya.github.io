import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Звертаємося до Firebase для перевірки логіну/пароля
            await signInWithEmailAndPassword(auth, email, password);
            alert("Вхід успішний!");
            navigate('/'); // Перекидаємо на головну сторінку
        } catch (err) {
            setError("Неправильний email або пароль.");
        }
    };

    return (
        <div className="container" style={{ marginTop: '100px', maxWidth: '500px', minHeight: '60vh' }}>
            <h2 className="section-title" style={{ marginTop: '0', marginBottom: '30px' }}>Log In</h2>
            
            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

            <form onSubmit={handleLogin} className="comment-form">
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
                        placeholder="Your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn" style={{ marginTop: '20px' }}>Sign In</button>
            </form>
        </div>
    );
}