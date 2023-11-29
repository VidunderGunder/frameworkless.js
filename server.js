import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { autoroutes } from "elysia-autoroutes";
import { initRouter } from "./router";

export const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(
    autoroutes({
      routesDir: "./pages",
    })
  );

initRouter(app).onError(({ code, error, set }) => {
  if (code === "NOT_FOUND") set.redirect = "/";
  return new Response(error.toString());
});

app.listen(1111);

console.log(`🦊 Elysia is running at ${app.server?.url}`);
