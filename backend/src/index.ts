import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { users } from "./users";
import { identify } from "./identify";

const app = new Elysia()
  .use(swagger())
  .use(
    cors({
      allowedHeaders: "Content-Type",
      exposedHeaders: "Set-Cookie",
      credentials: true,
      origin: "http://localhost:5173",
    }),
  )
  .use(identify)
  .use(users)
  .listen(3000);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
