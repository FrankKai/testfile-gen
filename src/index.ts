#!/usr/bin/env node

import * as fs from "fs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
  alias: {
    s: "size",
    n: "name",
    p: "path",
  },
});

const fileSize = parseSize(args.size) || 1024;

const fileName = args.name || "output.txt";

const outputPath = args.path || "./";

const buffer = Buffer.alloc(fileSize);
fs.writeFileSync(`${outputPath}/${fileName}`, buffer);

console.log(
  `File "${fileName}" with size ${fileSize} bytes created at ${outputPath}`
);

function parseSize(
  sizeString: string | number | undefined
): number | undefined {
  if (typeof sizeString === "number") {
    return sizeString;
  }

  if (typeof sizeString === "string") {
    const match = sizeString.match(/^(\d+(\.\d+)?)([KMG]?B)$/i);
    if (match) {
      const value = parseFloat(match[1]);
      const unit = match[3].toUpperCase();
      const unitMap: Record<string, number> = {
        KB: 1024,
        MB: 1024 * 1024,
        GB: 1024 * 1024 * 1024,
      };

      return value * (unitMap[unit] || 1);
    }
  }

  console.error(
    "Invalid size format. Please use a valid size format (e.g., 10KB, 5.5MB, 2GB)."
  );
  process.exit(1);
}
