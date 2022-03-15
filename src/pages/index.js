import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../providers/AuthProvider";
import styles from "../styles/Login.module.css";

export default function Login() {
  const { user, handleLogin, handleLogout } = useAuth();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    // eslint-disable-next-line no-unused-vars
    const [err, _] = await handleLogin(email.value, password.value);
    err ? alert(err) : router.push("/admin");
  };

  const onLogout = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const [err, _] = await handleLogout();
    err ? alert(err) : router.push("/");
  };

  if (user) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Log In</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.loginWrapper}>
          <h1>{"You're already logged in with the following account:"}</h1>
          <h4>{user.email}</h4>
          <button onClick={onLogout}>Log Out</button>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.loginWrapper}>
        <h1>Login Screen</h1>
        <form {...{ onSubmit }}>
          <label>Email</label>
          <input name={"email"} type={"text"} />
          <label>Password</label>
          <input name={"password"} type={"password"} />
          <button type={"submit"}>Log In</button>
        </form>
        <p>
          {"Don't have an account? "}
          <Link href={"/signup"}>
            <a>Sign Up here</a>
          </Link>
        </p>
      </section>
    </div>
  );
}
