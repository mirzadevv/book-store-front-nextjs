import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/uiElements/bookCard.module.css";
import { API_URL } from "../../config/index";

const BookCard = ({ bookData }) => {
  const srcImage = `${API_URL}${bookData?.attributes?.image?.data[0]?.attributes?.url}`;
  const categoryTilte = bookData?.attributes?.category?.data?.attributes?.title;

  return (
    <>
      <Link href={`/books/${bookData?.id}`}>
        <a>
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
                <h3>{!categoryTilte ? "undefined" : categoryTilte}</h3>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BookCard;
