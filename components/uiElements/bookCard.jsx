import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/uiElements/bookCard.module.css";
import { API_URL } from "../../config/index";

const BookCard = ({ bookData, type }) => {
  const srcImage = `${API_URL}${bookData?.attributes?.image?.data[0]?.attributes?.url}`;
  const categoryTilte = bookData?.attributes?.category?.data?.attributes?.title;
  const bookTitle = bookData?.attributes?.title;

  function getImage() {
    if (type === "large") {
      return (
        <Image
          loader={() => {
            return srcImage;
          }}
          src={srcImage}
          width={300}
          height={400}
        />
      );
    } else if (type === "small") {
      return (
        <Image
          loader={() => {
            return srcImage;
          }}
          src={srcImage}
          width={180}
          height={220}
        />
      );
    }
  }

  function getCategoryOrTitle() {
    const headingStyles = {
      marginTop: "6px",
      color: "white",
      textTransform: "uppercase",
    };
    return (
      <div className={styles.imageTitle}>
        {type === "large" ? (
          <h3 style={headingStyles}>
            {!categoryTilte ? "undefined" : categoryTilte}
          </h3>
        ) : (
          <h3 style={{ ...headingStyles, fontSize: "12px" }}>
            {!categoryTilte ? "undefined" : bookTitle}
          </h3>
        )}
      </div>
    );
  }

  return (
    <>
      <Link href={`/books/${bookData?.id}`}>
        <a>
          <div className={styles.bookCard}>
            <div className={styles.image}>
              {getImage()}
              {getCategoryOrTitle()}
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BookCard;
