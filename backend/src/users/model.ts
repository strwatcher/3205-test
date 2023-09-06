import { Elysia, t } from "elysia";

export const userModel = new Elysia().model({
  QueryDto: t.Object({
    email: t.String(),
    number: t.Optional(t.String()),
  }),
  UsersDto: t.Array(
    t.Object({
      email: t.String(),
      number: t.String(),
    }),
  ),
});
