import { FC } from "hono/jsx";
import TodoList from "./TodoList";
import { todos } from "../../db/schema";
import { InferSelectModel } from "drizzle-orm";

type Props = {
  todos: InferSelectModel<typeof todos>[];
};

const ListArea: FC<Props> = ({ todos }) => {
  return (
    <div class="container mx-auto max-w-xl">
      <div class="card bg-base-100 shadow-xl mb-5">
        <div class="card-body">
          <h2 class="card-title">Add New Task</h2>
          <form method="POST">
            <div class="form-control space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                class="input input-bordered w-full"
              />
              <textarea
                name="detail"
                className="textarea textarea-bordered"
                placeholder="Detail"
              ></textarea>
              <button type="submit" class="btn btn-sm btn-primary w-16 mx-auto">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card bg-blue-200 mb-5">
        <div className="card-body">
          <h2 className="card-title">未完了</h2>
          <TodoList todos={todos.filter((todo) => !todo.done)} />
        </div>
      </div>

      <div className="card bg-green-200">
        <div className="card-body">
          <h2 className="card-title">完了済</h2>
          <TodoList todos={todos.filter((todo) => todo.done)} />
        </div>
      </div>
    </div>
  );
};

export default ListArea;
