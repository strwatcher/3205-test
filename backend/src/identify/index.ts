import cookie from "@elysiajs/cookie";
import Elysia, { t } from "elysia";
import { globalModel } from "../global/model";

export const identify = new Elysia()
  .use(cookie)
  .use(globalModel)
  .post(
    "/identify",
    ({ cookie, setCookie }) => {
      if (!cookie.id) {
        setCookie("id", crypto.randomUUID());
      }
      return null;
    },
    {
      response: {
        200: t.Object({}),
        500: "Error",
      },
    },
  );
