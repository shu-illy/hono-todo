import { FC } from "hono/jsx";
import { Todo } from "../../types/todo";

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  const handleDelete = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };
  const handleDone = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div class="space-y-4">
      {todos
        .filter((todo) => !todo.done)
        .map((todo) => (
          <div class="card bg-base-100 shadow-xl justify-between">
            <div class="card-body flex flex-row justify-between">
              <div class="form-control flex items-center">
                <a href={`/todos/${todo.id}`}>
                  <label class="label cursor-pointer flex-grow">
                    <span class="label-text ml-2">{todo.title}</span>
                  </label>
                </a>
              </div>
              <div className="flex-none">
                <button
                  class="btn btn-accent btn-sm m-2"
                  onClick={() => {
                    handleDone(todo.id);
                  }}
                >
                  Done
                </button>
                <button
                  class="btn btn-error btn-sm m-2"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
