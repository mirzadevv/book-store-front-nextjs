import Head from "next/head";
import MainSwiper from "../components/uiElements/swiper";
import CategoryButtons from "../components/categoryButtons";
import BooksByCategory from "../components/booksByCategory";
import styles from "../styles/pages/index.module.css";
import { API_URL } from "../config/index";
import { useState } from "react";

export default function Home({ uniqueBooksCategory, categories }) {
  const [booksByCategory, setBooksByCategory] = useState([]);
  const [isLoaingBooksByCategory, setIsLoaingBooksByCategory] = useState(false);
  async function getBooksByCategory({ title: categoryTitle }) {
    const qs = require("qs");
    const query = qs.stringify(
      {
        populate: "*",
        filters: {
          category: {
            title: {
              $eq: categoryTitle,
            },
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    setIsLoaingBooksByCategory(true);
    const response = await fetch(`http://localhost:1337/api/books?${query}`);
    const data = await response.json();
    setBooksByCategory(data);
    setIsLoaingBooksByCategory(false);
  }
  return (
    <div>
      <Head>
        <title>Mirzaei Book Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainSwiper booksData={uniqueBooksCategory} />
        <CategoryButtons categories={categories} onClick={getBooksByCategory} />
        <BooksByCategory
          booksByCategory={booksByCategory}
          isLoading={isLoaingBooksByCategory}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const qs = require("qs");
  const descendingBooksQuery = qs.stringify(
    {
      populate: "*",
      sort: ["createdAt:desc"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const responsedBooks = await fetch(
    `${API_URL}/api/books?${descendingBooksQuery}`
  );
  const books = await responsedBooks.json();
  const booksData = books.data.slice(0, 20);
  const uniqueBooksCategory = [];
  const fields = [];
  booksData.forEach((element) => {
    const isIncluded = fields.includes(
      element.attributes.category.data.attributes.title
    );
    if (!isIncluded) {
      fields.push(element.attributes.category.data.attributes.title);
      uniqueBooksCategory.push(element);
    }
  });

  const responsedCategories = await fetch(
    "http://localhost:1337/api/categories"
  );
  const categories = await responsedCategories.json();

  return {
    props: { uniqueBooksCategory, categories },
    revalidate: 30,
  };
}
