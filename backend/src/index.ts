import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { users } from "./users";
import { identify } from "./identify";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        servers: [
          { url: "http://localhost:3000", description: "Development server" },
        ],
        info: {
          title: "3205 Test",
          version: "1.0.0",
          description:
            "Documentation of api to solve task by 3205 recruitment team",
        },
      },
      exclude: "/",
      path: "/docs",
    }),
  )
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

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
