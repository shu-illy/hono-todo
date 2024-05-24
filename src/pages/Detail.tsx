import { FC } from "hono/jsx";

type Props = {
  id: string;
};

export const Detail: FC<Props> = ({ id }) => {
  return (
    <>
      <h1>Todo id: {id}</h1>
    </>
  );
};
