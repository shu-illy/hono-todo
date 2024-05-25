import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
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
            <button class="btn btn-sm btn-primary w-16 mx-auto">Add</button>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        {Array(5)
          .fill("")
          .map((_) => (
            <div class="card bg-base-100 shadow-xl justify-between">
              <div class="card-body flex flex-row justify-between">
                <div class="form-control flex items-center">
                  <label class="label cursor-pointer flex-grow">
                    <span class="label-text ml-2">Build a new app</span>
                  </label>
                </div>
                <div className="flex-none">
                  <button class="btn btn-accent btn-sm m-2">Done</button>
                  <button class="btn btn-error btn-sm m-2">Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
