import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  let keyId = 0;

  const sortedTodoList = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={style.list}>
      {sortedTodoList.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo.name}
          todos={todos}
          setTodos={setTodos}
          id={todo.id}
        />
      ))}
    </div>
  );
}
