import Elysia, { t } from "elysia";

export const globalModel = new Elysia().model({
  Error: t.Unknown(),
});
