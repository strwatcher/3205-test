import { Rule } from "effector-forms";

export const rules = {
  required: (): Rule<string> => ({
    name: "required",
    validator: (value) => Boolean(value),
    errorText: "Обязательное поле",
  }),
  emailPart: (): Rule<string> => ({
    name: "emailPart",
    validator: (value) =>
      /^[\d \w]+(@([\d \w]+(.([\d \w]+)?)?)?)?$/.test(value),
    errorText: "Неверный формат",
  }),
};
