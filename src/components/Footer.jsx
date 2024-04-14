import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span>
        Task Completed: {completedTodos}/{totalTodos}
      </span>
    </div>
  );
}
