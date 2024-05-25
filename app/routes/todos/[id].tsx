import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const id = c.req.param().id;
  console.log(id);

  return c.render(<div>id: {id}</div>);
});
