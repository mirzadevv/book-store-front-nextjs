import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/components/uiElements/searchInput.module.css";
export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/books/search?value=${value}`);
  }

  function handleChange(e) {
    setValue(e.currentTarget.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className={styles.input}
          placeholder="Search everything..."
        />
      </form>
    </>
  );
}
