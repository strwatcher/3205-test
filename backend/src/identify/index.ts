import cookie from "@elysiajs/cookie";
import Elysia from "elysia";

export const identify = new Elysia()
  .use(cookie)
  .post("/identify", ({ cookie, setCookie }) => {
    if (!cookie.id) {
      setCookie("id", crypto.randomUUID());
    }
  });
