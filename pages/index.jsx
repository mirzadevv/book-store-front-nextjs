import Head from "next/head";
import MainSwiper from "../components/uiElements/swiper";
import styles from "../styles/pages/index.module.css";
import { API_URL } from "../config/index";

export default function Home({ booksData }) {
  return (
    <div>
      <Head>
        <title>Mirzaei Book Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainSwiper booksData={booksData} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `${API_URL}/api/books?populate=category,image,author`
  );
  const result = await response.json();
  const booksData = result.data.slice(0, 8);
  return {
    props: { booksData, revalidate: 1 },
  };
}
