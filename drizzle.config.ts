// NOTE: ローカル環境でしか使わないファイルなので、process.envが使える
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    wranglerConfigPath: "./wrangler.toml",
    dbName: "honox-todo",
  },
});
