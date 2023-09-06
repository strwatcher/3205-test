import { Text } from "@/shared/ui/text";
import { Stack } from "@/shared/ui/stack";
import { SearchForm } from "./search-form";
import { useUsers } from "../model";
import { User } from "./user";
import { Show } from "@/shared/lib/show";

export const Page = () => {
  const { users, pending, initial } = useUsers();

  return (
    <Stack>
      <SearchForm />
      <Stack>
        <Show when={!pending && !!users && users}>
          {(users) => (
            <>
              {users.map((user, index) => (
                <User key={index} {...user} />
              ))}
            </>
          )}
        </Show>
        <Show when={pending}>
          <Text centered>Загрузка...</Text>
        </Show>
        <Show when={!pending && !users?.length && !initial}>
          <Text centered>Таких пользователей нет</Text>
        </Show>
        <Show when={!pending && !users?.length && initial}>
          <Text centered>
            Заполните фильтры и нажмите на кнопку, чтобы найти пользователей
          </Text>
        </Show>
      </Stack>
    </Stack>
  );
};
