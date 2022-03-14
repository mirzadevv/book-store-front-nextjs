import React from "react";
import { API_URL } from "../../config/index";
import styles from "../../styles/pages/books/book.module.css";
import BookCard from "../../components/uiElements/bookCard";
import Image from "next/image";

const Book = ({ bookData, relatedeBooksData, randomReadingPerk }) => {
  const { attributes: bookAttributes } = bookData.data;
  const { author: authorAttributes } = bookData.data.attributes;
  const { category: categoryAtributes } = bookData.data.attributes;
  const { publisher: publisherAttributes } = bookData.data.attributes;
  const readingPerkSrcImg = `${API_URL}${randomReadingPerk?.attributes?.image?.data?.attributes?.url}`;

  return (
    <div className={styles.book}>
      <div className={`${styles.item} ${styles.cover}`}>Cover</div>
      <div className={`${styles.item} ${styles.mainInfo}`}>
        <div className={styles.firstMainInfo}>
          <h2 className={styles.bookTitle}>{bookAttributes.title}</h2>
          <p className={styles.authorTitle}>
            {authorAttributes.data.attributes.full_name}
          </p>
        </div>
        <div className={styles.secondMainInfo}>
          <h4 className={styles.title}>Category</h4>
          <p className={styles.value}>
            {categoryAtributes.data.attributes.title}
          </p>
          <h4 className={styles.title}>Publisher</h4>
          <p className={styles.value}>
            {publisherAttributes.data.attributes.title}
          </p>
          <h4 className={styles.title}>Year</h4>
          <p className={styles.value}>2020</p>
        </div>
        <div className={`${styles.description}`}>
          <p className={styles.description}>{bookAttributes.description}</p>
        </div>
        <button className={styles.button}>Order</button>
      </div>
      <div className={`${styles.item}`}>
        <div className={styles.readingPerk}>
          <Image
            loader={() => {
              return readingPerkSrcImg;
            }}
            src={readingPerkSrcImg}
            width={160}
            height={160}
          />
          <p> {randomReadingPerk.attributes.title} </p>
        </div>
      </div>
      <div className={`${styles.item} ${styles.relatedBooks}`}>
        <h3 className={styles.relatedBooksTitle}>You will also like</h3>
        <div className={styles.relatedBooksContainer}>
          {relatedeBooksData.map((item) => (
            <BookCard key={item.id} bookData={item} type="small" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;

export async function getServerSideProps({ query }) {
  const bookResponse = await fetch(
    `${API_URL}/api/books/${query.id}/?populate=*`
  );
  const bookData = await bookResponse.json();

  const categoryTitle = bookData.data.attributes.category.data.attributes.title;
  const bookTitle = bookData.data.attributes.title;

  const qs = require("qs");
  const booksQuery = qs.stringify(
    {
      populate: "*",
      filters: {
        category: {
          title: {
            $eq: categoryTitle,
          },
        },
      },
      sort: ["createdAt:desc"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const relatedBooksResponse = await fetch(
    `${API_URL}/api/books?${booksQuery}`
  );
  const relatedBooks = await relatedBooksResponse.json();
  const relatedeBooksResult = relatedBooks.data.slice(0, 4);
  const relatedeBooksData = relatedeBooksResult.filter(
    (item) => item.attributes.title !== bookTitle
  );

  const readingPerksResponse = await fetch(
    `${API_URL}/api/reading-perks?populate=*`
  );
  const { data: readingPerkData } = await readingPerksResponse.json();
  const randomReadingPerkIndex = Math.floor(
    Math.random() * readingPerkData.length
  );
  const randomReadingPerk = readingPerkData[randomReadingPerkIndex];

  return {
    props: {
      bookData,
      relatedeBooksData,
      randomReadingPerk,
    },
  };
}
