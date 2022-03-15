import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import useAuth from "../../providers/AuthProvider";
import useProtectedRoute from "../../hooks/useProtectedRoute";

function Admin() {
  const router = useRouter();
  const { handleLogout } = useAuth();

  const onLogoutClick = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const [err, _] = await handleLogout();
    err ? alert(err) : router.push("/");
  };

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

// eslint-disable-next-line react-hooks/rules-of-hooks
export default useProtectedRoute(Admin);
