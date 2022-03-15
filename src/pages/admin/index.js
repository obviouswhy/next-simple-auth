import Head from "next/head";
import styles from "./styles.module.css";

export default function Admin() {
  const onLogoutClick = () => {};
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Page</title>
      </Head>
      <section className={styles.adminWrapper}>
        <h1>Admin Page</h1>
        <h3>{"(Only accessible if you are logged in)"}</h3>
        <button onClick={onLogoutClick}>Log Out</button>
      </section>
    </div>
  );
}
