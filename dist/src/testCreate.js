import { resolve } from "node:path";
import { getDirname } from "./utils/index.js";
import fs from "fs-extra";
import Create from "./Create.js";
import { reactPackageInstance } from "./test/const.js";
const __dirname = getDirname(import.meta.url);
const dirPath = resolve(__dirname, "../../aTestProject");
if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
    console.log(`删除 ${dirPath} \n`);
}
const createInstance = new Create(dirPath, false);
const { language, frame, packages } = reactPackageInstance;
const option = {
    language,
    frame,
    packages,
    // language: "TypeScript",
    // packages: ["Commitlint", "Husky"],
    // packages: ["Eslint", "Puppeteer-core", "Vitest"],
    git: true,
};
createInstance.run(option);
