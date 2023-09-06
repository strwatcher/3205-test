import { Stack } from "@/shared/ui/stack";
import { SearchForm } from "./search-form";
import { UsersList } from "./users-list";

export const Page = () => {
  return (
    <Stack>
      <SearchForm />
      <UsersList />
    </Stack>
  );
};
