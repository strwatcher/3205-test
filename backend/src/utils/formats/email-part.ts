import { t } from "elysia";

export const emailPart = t.RegExp(/^[\d \w]+(@([\d \w]+(.([\d \w]+)?)?)?)?$/);
