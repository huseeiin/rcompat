import { resolve } from "@rcompat/fs";
import { maybe } from "@rcompat/invariant";
import manifest_name from "./manifest-name.js";

export default (relative_to?: string) => {
  maybe(relative_to).string();

  return resolve(relative_to).discover(manifest_name);
};
