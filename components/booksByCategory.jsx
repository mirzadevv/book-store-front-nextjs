import styles from "../styles/components/booksByCategory.module.css";
import BookCard from "./uiElements/bookCard";
import { Spin } from "antd";

export default function BooksByCategory({ booksByCategory, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className={styles.spin}>
          <Spin />
        </div>
      ) : (
        <div className={styles.booksByCategory}>
          {booksByCategory?.data?.map((item) => (
            <BookCard bookData={item} type="small" />
          ))}
        </div>
      )}
    </>
  );
}
