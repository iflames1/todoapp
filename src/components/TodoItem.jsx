import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos, id }) {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return null;
  }
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const classButton = todo?.done ? styles.undoneButton : styles.doneButton;
  const renderDone = todo?.done ? "Mark as Undone" : "Done";

  function handleDone(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.itemName}>{item}</div>
        <div className={styles.buttons}>
          <button onClick={() => handleDone(id)} className={classButton}>
            {renderDone}
          </button>

          <button
            onClick={() => handleDelete(id)}
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
