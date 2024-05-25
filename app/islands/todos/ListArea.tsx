import { FC, useState } from "hono/jsx";
import { Todo } from "../../types/todo";
import TodoList from "./TodoList";

const initialTodos: Todo[] = [
  {
    id: "9b7e8731-4855-4cd9-9942-3172ddb03870",
    title: "Task 83",
    detail: "Detail of task 27",
    done: false,
  },
  {
    id: "796641bb-9ea2-4c59-9302-14031095528d",
    title: "Task 68",
    detail: "Detail of task 27",
    done: false,
  },
  {
    id: "365bc17b-ec22-44ed-bdc9-791def88ce21",
    title: "Task 91",
    detail: "Detail of task 67",
    done: false,
  },
  {
    id: "ae270621-e695-4948-98e2-4d2968d26c92",
    title: "Task 47",
    detail: "Detail of task 89",
    done: true,
  },
  {
    id: "be1e5229-fc27-46f8-b6a9-ea99664eb85a",
    title: "Task 6",
    detail: "Detail of task 22",
    done: false,
  },
];
const hoge: Todo[] = [
  {
    id: "be1e5229-fc27-46f8-b6a9-ea99664eb85a",
    title: "Task 6",
    detail: "Detail of task 22",
    done: false,
  },
];

const ListArea: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const addTodo = () => {
    const title = document.querySelector("input")?.value;
    const detail = document.querySelector("textarea")?.value;

    if (title && detail) {
      const newTodo: Todo = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        detail,
        done: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div class="container mx-auto max-w-xl">
      <div class="card bg-base-100 shadow-xl mb-5">
        <div class="card-body">
          <h2 class="card-title">Add New Task</h2>
          <div class="form-control space-y-4">
            <input
              type="text"
              placeholder="Title"
              class="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Detail"
            ></textarea>
            <button
              class="btn btn-sm btn-primary w-16 mx-auto"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ListArea;
