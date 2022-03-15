import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Login.module.css";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

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
