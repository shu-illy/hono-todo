import { Hono } from "hono";
import { renderer } from "./renderer";
import { List } from "./pages/List";
import { Detail } from "./pages/Detail";

type Bindings = {
  MY_NAME: string;
  MY_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<List />);
});

app.get("/todo/:id", (c) => {
  const { id } = c.req.param();
  return c.render(<Detail id={id} />);
});

export default app;
