import { drizzle } from "drizzle-orm/d1";
import { createRoute } from "honox/factory";
import { todos } from "../../db/schema";
import { eq } from "drizzle-orm";

export default createRoute((c) => {
  const id = c.req.param().id;
  console.log(id);

  return c.render(<div>id: {id}</div>);
});

export const DELETE = createRoute(async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param().id;

  await db.delete(todos).where(eq(todos.id, Number(id)));

  return c.redirect("/todos");
});

export const PUT = createRoute(async (c) => {
  const db = drizzle(c.env.DB);
  const id = c.req.param().id;

  console.log(`id: ${id}`);
  await db
    .update(todos)
    .set({ done: true })
    .where(eq(todos.id, Number(id)));

  return c.redirect("/todos");
});
