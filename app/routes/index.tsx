import { createRoute } from "honox/factory";
import ListArea from "../islands/todos/ListArea";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";

  return c.render(<ListArea />);
});
