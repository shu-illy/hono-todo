import { FC } from "hono/jsx";
import { todos } from "../../db/schema";
import { InferSelectModel } from "drizzle-orm";

type Props = {
  todos: InferSelectModel<typeof todos>[];
};

const TodoList: FC<Props> = ({ todos }) => {
  const handleDelete = async (id: number) => {
    await fetch(`/todos/${id}`, { method: "DELETE" });
    window.location.href = "/todos";
  };
  const handleDone = async (id: number) => {
    await fetch(`/todos/${id}`, { method: "PUT" });
    window.location.href = "/todos";
  };

  return (
    <div class="space-y-4">
      {todos.map((todo) => (
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
