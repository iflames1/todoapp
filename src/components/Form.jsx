import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", id: 0, done: false });
  function isEmpty(todo) {
    return todo.trim() === "" ? null : todo;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const key = todos.length;
    if (!isEmpty(todo.name)) {
      return;
    }
    setTodos([...todos, { ...todo, id: key }]);
    setTodo({ name: "", id: key, done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <div className={styles.todoContainer}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Add Todo..."
          className={styles.modernInput}
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
