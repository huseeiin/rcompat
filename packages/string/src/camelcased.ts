import upperfirst from "./upperfirst.js";

export default (string: string): string => string.toLowerCase().split(/[-_]/u)
  .map(part => upperfirst(part)).join("");
