import styles from "../../styles/pages/order/index.module.css";

export default function Order() {
  return (
    <div className={styles.order}>
      <h3>ORDER PAGE</h3>
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
