import styles from "../../styles/components/uiElements/button.module.css";
export default function Button({ title, type }) {
  return (
    <div className={`${styles.button} ${styles[`${type}Button`]}`}>{title}</div>
  );
}
