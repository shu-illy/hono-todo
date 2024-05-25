import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import styles from "../style.css?url";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href={styles} rel="stylesheet" />
        <Script src="/app/client.ts" async />
        <Style />
      </head>
      <body className="h-full bg-gray-100 p-10">{children}</body>
    </html>
  );
});
