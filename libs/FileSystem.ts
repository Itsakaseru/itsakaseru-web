import fs from "node:fs";

export type fileType = 
  ".mdx";

export function getFileList(folderPath: string, type: fileType) {
  return fs.readdirSync(folderPath).filter((file) => file.endsWith(".mdx"));
}