import React from "react";
import styles from "../../styles/pages/books/book.module.css";
import { API_URL } from "../../config/index";

const Book = ({ bookData }) => {
  return (
    <div className={styles.book}>
      <div className={`${styles.item} ${styles.cover}`}>Cover</div>
      <div className={`${styles.item} ${styles.mainInfo}`}>
        <div className={styles.title}>
          <h2>{bookData.data.attributes.title}</h2>
          <p> {bookData.data.attributes.author.data.attributes.full_name}</p>
        </div>
      </div>
      <div className={`${styles.item}`}>Reading Perks</div>
      <div className={`${styles.item} ${styles.fourth}`}> Description </div>
    </div>
  );
};

export default Book;

export async function getServerSideProps({ query }) {
  const response = await fetch(
    `${API_URL}/api/books/${query.id}/?populate=category,image,author`
  );
  const result = await response.json();
  return {
    props: { bookData: result },
  };
}
