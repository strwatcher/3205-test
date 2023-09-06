import Elysia from "elysia";
import { CancelableMap } from "../utils/cancelable-map";

export const store = new Elysia()
  .decorate("users", [
    {
      email: "jim@gmail.com",
      number: "221122",
    },
    {
      email: "jam@gmail.com",
      number: "830347",
    },
    {
      email: "john@gmail.com",
      number: "221122",
    },
    {
      email: "jams@gmail.com",
      number: "349425",
    },
    {
      email: "jams@gmail.com",
      number: "141424",
    },
    {
      email: "jill@gmail.com",
      number: "822287",
    },
    {
      email: "jill@gmail.com",
      number: "822286",
    },
  ])
  .decorate("canceles", new CancelableMap());
