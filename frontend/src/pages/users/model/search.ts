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
      rules: [rules.number()],
    },
  },
});

sample({
  clock: form.formValidated,
  target: getUsersQuery.start,
});

export function useSearchForm() {
  const searchForm = useForm(form);

  return {
    onSubmit: searchForm.submit,
    fields: {
      email: {
        onChange: searchForm.fields.email.onChange,
        error: searchForm.fields.email.errorText(),
        value: searchForm.fields.email.value,
      },
      number: {
        onChange: searchForm.fields.number.onChange,
        error: searchForm.fields.number.errorText(),
        value: searchForm.fields.number.value,
      },
    },
  };
}
