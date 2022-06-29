import styles from "../styles/Login.module.css";
import Button from "../components/shared/Button/Button";
import GoogleButton from "react-google-button";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <Link href={"/"} passHref>
          <ArrowLeft className={styles.backArrow} />
        </Link>
        <form className={styles.loginForm}>
          <h3>BBOYAPP</h3>
          <h1>Log in</h1>
          <input placeholder="email" className={styles.loginInput} />
          <input placeholder="password" className={styles.loginInput} />
          <Button
            style={{ marginTop: 10 }}
            text="Log in"
            className={styles.loginButton}
            onClick={() => console.log(12)}
          >
            Log in
          </Button>
          <div className={styles.loginDivider}>
            <div
              className={styles.loginDividerLine}
              style={{ marginRight: 5 }}
            ></div>
            <span>OR</span>
            <div
              className={styles.loginDividerLine}
              style={{ marginLeft: 5 }}
            ></div>
          </div>
          <GoogleButton type="light" style={{ marginTop: 25 }} />
          <p className={styles.registerText}>
            Dont have an account? <Link href="/register">Sign up</Link>
          </p>
        </form>
      </div>
      <div
        className={styles.loginRight}
        style={{ backgroundImage: "url(./login-bg.jpg)" }}
      ></div>
    </div>
  );
}
