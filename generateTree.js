import fs from "fs";
import path from "path";

async function generateTree(dir, prefix = "") {
  const items = await fs.promises.readdir(dir);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === "node_modules" || item === "dist" || item === ".git" || item === ".husky") continue; // Исключаем ненужные папки

    const fullPath = path.join(dir, item);
    const isDir = (await fs.promises.stat(fullPath)).isDirectory();
    const isLast = i === items.length - 1;

    console.log(`${prefix}${isLast ? "└──" : "├──"} ${item}`);

    if (isDir) {
      await generateTree(fullPath, `${prefix}${isLast ? "    " : "│   "}`);
    }
  }
}

console.log("📂 Project Structure:");
generateTree(process.cwd());
