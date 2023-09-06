import { t } from "elysia";

export const numberPart = t.Optional(t.RegExp(/^\d{1,6}$/));
