import { Show } from "@/shared/lib/show";
import { Stack } from "@/shared/ui/stack";
import { Text } from "@/shared/ui/text";
import { User } from "./user";
import { useUsers } from "../model";

export const UsersList = () => {
  const { users, pending, initial } = useUsers();

  return (
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
  );
};
