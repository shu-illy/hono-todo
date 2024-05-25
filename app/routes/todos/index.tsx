import { drizzle } from "drizzle-orm/d1";
import { createRoute } from "honox/factory";
import { todos } from "../../db/schema";
import ListArea from "../../islands/todos/ListArea";

export const POST = createRoute(async (c) => {
  const db = drizzle(c.env.DB);

  const body = await c.req.formData();
  await db
    .insert(todos)
    .values({
      title: body.get("title")?.toString() ?? "",
      detail: body.get("detail")?.toString() ?? "",
      done: false,
    })
    .returning();

  return c.redirect("/todos");
});

export default createRoute(async (c) => {
  const name = c.req.query("name") ?? "Hono";
  const db = drizzle(c.env.DB);

  const result = await db.select().from(todos);

  return c.render(<ListArea todos={result} />);
});
