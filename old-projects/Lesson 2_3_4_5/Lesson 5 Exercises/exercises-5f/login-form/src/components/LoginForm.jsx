import { useState } from 'react';
import './LoginForm.css';

export function LoginForm() {
        const [showPassword, setShowPassword] = useState(false);

        function togglePassword() {
            setShowPassword(!showPassword);
        }

        return (
            <>
            
            <div>
                <input 
                type="text"
                placeholder="Email" 
                className="login-input"
                />
            </div>
            <div>
                <input 
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="login-input"
                />  

                <button 
                    className="show-btn"
                    onClick={togglePassword}>
                        {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            
            <button 
                className="login-btn">Login</button>
            <button
                className="login-btn">Sign up</button>
            </>
        );
    }