import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { initRouter, pages } from "./router";
import { swagger } from "@elysiajs/swagger";

export const app = new Elysia()
  .use(
    swagger({
      exclude: Object.keys(pages),
    })
  )
  .use(html())
  .use(staticPlugin())
  .get("/api/hello", () => "Hello");

initRouter(app).listen(1111);

console.log(`🦊 Elysia is running at ${app.server?.url}`);
