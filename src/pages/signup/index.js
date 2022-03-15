import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import useAuth from "../../providers/AuthProvider";

export default function Signup() {
  const { user, handleSignUp, handleLogout } = useAuth();
  const router = useRouter();

  const onSubmit = async (e) => {
    const { email, password, passwordConfirmation } = e.target;
    e.preventDefault();

    if (password.value !== passwordConfirmation.value) {
      return alert("Password fields must match");
    }

    // eslint-disable-next-line no-unused-vars
    const [err, _] = await handleSignUp(email.value, password.value);
    err ? alert(err) : router.push("/admin");
  };

  const onLogout = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const [err, _] = await handleLogout();
    err ? alert(err) : router.push("/signup");
  };

  if (user) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Log In</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.signUpWrapper}>
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
