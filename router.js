import { file } from "bun";
import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { app } from "./server";

/**
 * Recursively retrieves all files from the given directory.
 *
 * @param {string} dir The base directory to search in.
 * @param {string} [rootDir] The root directory for relative path calculation.
 * @returns {Promise<Record<string, string>>} An object mapping routes to file paths.
 */
async function getFiles(dir, rootDir = dir) {
  /** @type {Record<string, string>} */
  const pages = {};

  try {
    const entries = await readdir(dir, { withFileTypes: true });
    await Promise.all(
      entries.map(async (entry) => {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
          // Recursively process directories
          Object.assign(pages, await getFiles(fullPath, rootDir));
        } else if (entry.isFile()) {
          // Process files
          const relativePath = relative(rootDir, fullPath);
          const route =
            "/" +
            relativePath
              .split(sep)
              .join("/")
              .replace(/\.html$/, "")
              .replace(/index$/, "");
          pages[route] = fullPath;
        }
      })
    );
  } catch (err) {
    console.error(err);
  }

  return pages;
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
  app.get("/*", () => {
    const path = "./pages/404.html";
    return file(path).text();
  });
  return app;
}
