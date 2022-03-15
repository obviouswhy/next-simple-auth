import Head from "next/head";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <section className={styles.signUpWrapper}>
        <h1>Sign Up Screen</h1>
        <form {...{ onSubmit }}>
          <label>Email</label>
          <input name={"email"} type={"text"} />
          <label>Password</label>
          <input name={"password"} type={"password"} />
          <label>Password Confirmation</label>
          <input name={"passwordConfirmation"} type={"password"} />
          <button type={"submit"}>Sign Up</button>
        </form>
        <p>
          {"Already have an account? "}
          <Link href={"/"}>
            <a>Log In here</a>
          </Link>
        </p>
      </section>
    </div>
  );
}
