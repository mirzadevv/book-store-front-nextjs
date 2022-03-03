import React from "react";
import Image from "next/image";
import styles from "../../styles/components/uiElements/bookCard.module.css";
import { API_URL } from "../../config/index";

const BookCard = ({ bookData }) => {
  const srcImage = `${API_URL}${bookData?.attributes?.image?.data[0]?.attributes?.url}`;
  const category = bookData?.attributes?.category?.data?.attributes?.title;

  return (
    <div className={styles.bookCard}>
      <div className={styles.image}>
        <Image
          loader={() => {
            return srcImage;
          }}
          src={srcImage}
          width={300}
          height={400}
        />
        <div className={styles.category}>
          <h3>{!category ? "undefined" : category}</h3>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
