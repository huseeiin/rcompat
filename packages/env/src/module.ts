import process from "node:process";
import { parse } from "dotenv";
import { file } from "@rcompat/fs";
import { platform } from "@rcompat/core";
import * as P from "@rcompat/package";
import { tryreturn } from "@rcompat/async";

const { JS_ENV } = platform() === "bun" ? Bun.env : process.env;
const env = (await P.root()).join(`.env${JS_ENV ? `.${JS_ENV}` : ""}`);
const local = file(`${env.path}.local`);

const is_local = async () => await local.exists() ? local : env;
const read = async () => parse(await (await is_local()).text());

export default await tryreturn(() => read()).orelse(async () => ({}));

const { env: user } = process;

export { user };
