import { identity } from "@rcompat/function";
import { get_options, handle_ws } from "../private/exports.js";
import type { Conf, Handler, Actions } from "../types.js";

export default async (handler: Handler, conf: Conf) => {
  Deno.serve({
    port: conf.port,
    hostname: conf.host,
    // suppress default "Listening on" message
    onListen: identity,
    ...await get_options(conf),
  }, (request: Request) => handler(request));
  return {
    upgrade(request: Request, actions: Actions = {}) {
      const { socket, response } = Deno.upgradeWebSocket(request);
      handle_ws(socket, actions);
      return response;
    },
  };
};
