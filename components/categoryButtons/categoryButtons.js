import styles from "../../styles/components/categoryButtons/categoryButtons.module.css";
import Button from "../uiElements/button";
export default function CategoryButtons() {
  return (
    <div className={styles.categoryButtons}>
      <Button type="category" title="biography" />
      <Button type="category" title="children's" />
      <Button type="category" title="crime" />
      <Button type="category" title="drama" />
      <Button type="category" title="history" />
      <Button type="category" title="horror" />
      <Button type="category" title="philosophy" />
      <Button type="category" title="romance" />
      <Button type="category" title="science" />
    </div>
  );
}
