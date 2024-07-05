import { platform, UnimplementedError } from "@rcompat/core";
import bun from "../bun/worker/detect.js";

const unimplemented = (platform_name: string) => {
  throw new UnimplementedError(platform_name);
}

export default {
  bun,
  node: () => unimplemented("node"),
  deno: () => unimplemented("deno"),
}[platform()];
