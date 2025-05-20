import React, { useState } from "react";
import styles from './LoginForm.module.css';
import { Button } from "./Button";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <Button>Login</Button>
        </form>
    );
}