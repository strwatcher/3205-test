import { useStoreMap, useUnit } from "effector-react";
import {
  createJsonMutation,
  createJsonQuery,
  declareParams,
  isAbortError,
} from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { z } from "zod";
import { createStore, sample } from "effector";
import { appStarted } from "@/shared/config";
import { or } from "patronum";

export const UserContract = z.object({
  email: z.string().email(),
  number: z.string(),
});

export const getUsersQuery = createJsonQuery({
  params: declareParams<{ email: string; number: string }>(),
  request: {
    method: "GET",
    credentials: "include",
    url: ({ email, number }) =>
      `http://localhost:3000/users?email=${email}&number=${number}`,
  },
  response: {
    contract: zodContract(z.array(UserContract)),
  },
});

const $lastCallAborted = createStore(false);

sample({
  clock: [getUsersQuery.finished.failure, getUsersQuery.finished.success],
  fn: (result) => "error" in result && isAbortError(result),
  target: $lastCallAborted,
});

const $pending = or(getUsersQuery.$pending, $lastCallAborted);

getUsersQuery.$pending.watch(console.log);

export function useUsers() {
  const pending = useUnit($pending);
  const users = useUnit(getUsersQuery.$data);
  const initial = useStoreMap(
    getUsersQuery.$status,
    (status) => status === "initial",
  );
  return { users, pending, initial };
}

export const identifyQuery = createJsonMutation({
  request: {
    url: "http://localhost:3000/identify",
    method: "POST",
    credentials: "include",
  },
  response: {
    contract: zodContract(z.null()),
  },
});

sample({
  clock: appStarted,
  target: identifyQuery.start,
});
