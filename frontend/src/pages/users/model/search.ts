import { rules } from "@/shared/lib/rules";
import { sample } from "effector";
import { createForm, useForm } from "effector-forms";
import { getUsersQuery } from "./queries";

export const form = createForm({
  validateOn: ["submit"],
  fields: {
    email: {
      init: "",
      rules: [rules.required(), rules.emailPart()],
    },
    number: {
      init: "",
    },
  },
});

sample({
  clock: form.formValidated,
  fn: ({ email, number }) => ({ email, number: number.replace("-", "") }),
  target: getUsersQuery.start,
});

export function useSearchForm() {
  const searchForm = useForm(form);

  return {
    onSubmit: searchForm.submit,
    fields: {
      email: {
        onInput: searchForm.fields.email.onChange,
        error: searchForm.fields.email.errorText(),
        value: searchForm.fields.email.value,
      },
      number: {
        onInput: searchForm.fields.number.onChange,
        error: searchForm.fields.number.errorText(),
        value: searchForm.fields.number.value,
      },
    },
  };
}
