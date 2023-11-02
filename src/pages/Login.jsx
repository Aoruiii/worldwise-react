import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("aorui@example.com");
  const [password, setPassword] = useState("123456");
  const { isAuthed, login } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthed === true) navigate("/app", { replace: true });
    },
    [isAuthed, navigate]
  );

  function handleClick(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleClick}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
