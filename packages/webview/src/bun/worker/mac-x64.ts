const url = `../../platform/mac-x64-webview.bin`;
const { default: library } = await import(url, { with: { type: "file" } });
import base from "./base.js";

export default base(library);
