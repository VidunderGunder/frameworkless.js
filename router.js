import { file } from "bun";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { app } from "./server";

/**
 * @param {string} dir
 * @returns {Promise<Record<string, string>>}
 */
async function getFiles(dir) {
  try {
    const fileNames = await readdir(dir);
    /** @type {Record<string, string>} */
    const pages = {};
    fileNames.forEach((fn) => {
      const route = join("/", fn.replace(/\.html$/, "").replace(/index$/, ""));
      pages[route] = join(dir, fn);
    });
    return pages;
  } catch (err) {
    console.error(err);
    return {};
  }
}

const pages = await getFiles("./pages");

/**
 * @param {typeof app} app
 */
export function initRouter(app) {
  Object.entries(pages).forEach(([route, page]) => {
    app.get(route, () => {
      const path = pages[route] ?? "./pages/404.html";
      return file(path).text();
    });
  });
}
