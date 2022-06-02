import styles from "../styles/components/categoryButtons.module.css";
import Button from "../components/uiElements/button";
export default function CategoryButtons({ categories, onClick }) {
  return (
    <div className={styles.categoryButtons}>
      {categories.data.map((category) => (
        <Button
          key={category.id}
          type="category"
          title={category.attributes.title}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
