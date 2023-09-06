import { Rule } from "effector-forms";

export const rules = {
  required: (): Rule<string> => ({
    name: "required",
    validator: (value) => Boolean(value),
    errorText: "Это поле обязательное",
  }),
  emailPart: (): Rule<string> => ({
    name: "emailPart",
    validator: (value) => /[\d \w]+(@([\d \w]+(.([\d \w]+)?)?)?)?/.test(value), //TODO: so this
    errorText: "Неверный формат",
  }),
  number: (): Rule<string> => ({
    name: "number",
    validator: (value) => {
      return /d+/.test(value) || !value;
    },
    errorText: "Неверный формат",
  }),
};
