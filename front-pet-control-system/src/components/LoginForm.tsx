import React, { useState } from "react";
import styles from './LoginForm.module.css';
import { Button } from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}\nSenha: ${password}`);
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Senha:
                <div className={styles.passwordField}>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className={styles.eyeIcon}
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
            </label>
                <div className={styles.buttonRow}>
                    <Button>Login</Button>
                    <button
                        type="button"
                        className={styles.forgotButton}
                        onClick={() => alert('Função de recuperação de senha!')}
                    >
                        Esqueci a senha
                    </button>
                </div>
        </form>
    );
}