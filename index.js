import { file } from "bun";
import { Elysia } from "elysia";

// const pages = await file("pages").exists();
const wrapper = "./pages/_wrapper.html";
const pages = /** @type {const} */ ({
  "/": "./pages/index.html",
});

console.log(pages);

const app = new Elysia();

app.get("/", (request) => {
  // const route = _.path as keyof typeof pages;
  // Previous line as JSDoc
  /** @type {keyof typeof pages} */
  const route = /** @type {keyof typeof pages} */ (request.path);
  console.log(route);

  return file(pages[route]).text();
});

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.url}`);
