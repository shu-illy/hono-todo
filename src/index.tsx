import { Hono } from "hono";
import { renderer } from "./renderer";

type Bindings = {
  MY_NAME: string;
  MY_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello, Cloudflare Pages!</h1>);
});

export default app;
