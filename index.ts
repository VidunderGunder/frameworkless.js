import { file } from "bun";
import { Elysia } from "elysia";

// const pages = await file("pages").exists();
const wrapper = "./pages/_wrapper.html";
const pages = {
  "/": "./pages/index.html",
} as const;

console.log(pages);

const app = new Elysia();

app.get("/", (_) => {
  const route = _.path as keyof typeof pages;
  return file(pages[route]).text();
});

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.url}`);

const arr = [1, 2, 3, 4, 5];

console.log(arr[12]);
