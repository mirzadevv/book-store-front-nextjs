import styles from "../../styles/pages/account/dashboard.module.css";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard Page</h2>
      <h3>Welcome {user?.username}</h3>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.headers.cookie;
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/login",
      },
    };
  }
  return {
    props: {},
  };
}
