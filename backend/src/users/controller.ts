import { Elysia, t } from "elysia";
import { timedAction } from "../utils/timed-action";
import { store } from "./store";
import { seconds } from "../utils/seconds";
import cookie from "@elysiajs/cookie";
import { userModel } from "./model";
import { globalModel } from "../global/model";

export const users = new Elysia()
  .use(cookie)
  .use(store)
  .use(globalModel)
  .use(userModel)
  .get(
    "/users",
    async ({ query, users, canceles, cookie }) => {
      const result = await timedAction({
        delay: seconds(5),
        action: () =>
          users.filter(
            (user) =>
              user.email.toLowerCase().startsWith(query.email.toLowerCase()) &&
              (!query.number || user.number.startsWith(query.number)),
          ),
        hooks: {
          onStart: (reject) => {
            canceles.add(cookie.id, reject);
          },
          onEnd: () => {
            canceles.remove(cookie.id);
          },
        },
      });
      return result;
    },
    {
      query: "GetUsersQueryDto",
      response: {
        200: "GetUsersDto",
        403: "Error",
        500: "Error",
      },
    },
  )
  .onError(({ error, code, set }) => {
    if (code === "VALIDATION") {
      set.status = 403;
      return { error: error.all };
    }
    console.error(error);
  });
