import { Elysia, t } from "elysia";
import { emailPart, numberPart } from "../utils/formats";

export const userModel = new Elysia().model({
  GetUsersQueryDto: t.Object({
    email: emailPart,
    number: numberPart,
  }),
  GetUsersDto: t.Array(
    t.Object({
      email: t.String(),
      number: t.String(),
    }),
  ),
});
