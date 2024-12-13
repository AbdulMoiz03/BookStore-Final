import { useContext, useRef } from "react";
import AuthContext from "@/context/AuthContext";
import classes from "./Login.module.css";

export default function LoginPage() {
    const { login } = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(emailRef.current.value, passwordRef.current.value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                        required
                        className={classes.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                        className={classes.input}
                    />
                    <button type="submit" className={classes.button}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
