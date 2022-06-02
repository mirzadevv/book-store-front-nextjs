import styles from "../../styles/components/categoryButtons/categoryButtons.module.css";
import Button from "../uiElements/button";
export default function CategoryButtons({ categories }) {
  return (
    <div className={styles.categoryButtons}>
      {categories.data.map((category) => (
        <Button
          key={category.id}
          type="category"
          title={category.attributes.title}
        />
      ))}
    </div>
  );
}
