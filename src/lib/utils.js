import { join } from "path";

export function dataFilename(basePath = "") {
  const filename = join(basePath, ``);

  return filename;
}
