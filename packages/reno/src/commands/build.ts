import { program } from "commander";
import path from "path";
import { getEntryPoints } from "../lib/entories.js";
import { buildWithWebpack } from "../lib/webpack.js";

export default function command() {
  program
    .command("build")
    .description("Build the project for production.")
    .option("-o, --outdir <outdir>", "Output directory.", "dist")
    .action(action);
}

export async function action(options: { outdir: string }) {
  const entryPath = "**/{desktop,mobile}/index.ts";
  const entries = await getEntryPoints(entryPath);
  const outDir = path.posix.join(process.cwd(), options.outdir);
  await buildWithWebpack({ mode: "production", entries, outDir });
}
