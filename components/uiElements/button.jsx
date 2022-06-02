import styles from "../../styles/components/uiElements/button.module.css";
export default function Button({ title, type, onClick }) {
  return (
    <div
      className={`${styles.button} ${styles[`${type}Button`]}`}
      onClick={() => onClick({ title })}
    >
      {title}
    </div>
  );
}
