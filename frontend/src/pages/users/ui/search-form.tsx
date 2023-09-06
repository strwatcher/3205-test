import { Form } from "@/shared/ui/form";
import { useSearchForm } from "../model/search";
import { Stack } from "@/shared/ui/stack";
import { Group } from "@/shared/ui/group";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export const SearchForm = () => {
  const form = useSearchForm();
  return (
    <Form onSubmit={form.onSubmit}>
      <Stack>
        <Group grow>
          <Input label="Email" {...form.fields.email} />
          <Input label="Номер" {...form.fields.number} />
        </Group>
        <Button type="submit">Найти</Button>
      </Stack>
    </Form>
  );
};
