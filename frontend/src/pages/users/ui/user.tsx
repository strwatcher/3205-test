import { Text } from "@/shared/ui/text";
import { Group } from "@/shared/ui/group";
import { Paper } from "@/shared/ui/paper";

export type UserProps = {
  email: string;
  number: string;
};

export const User = (props: UserProps) => {
  return (
    <Paper>
      <Group>
        <Text>{`Email: ${props.email}`}</Text>
        <Text>{`Номер: ${props.number}`}</Text>
      </Group>
    </Paper>
  );
};
