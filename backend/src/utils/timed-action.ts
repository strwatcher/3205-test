import { Reject } from "./reject";

type TimedActionOptions<T> = {
  delay: number;
  hooks?: {
    onStart?: (reject: Reject) => void;
    onEnd?: () => void;
  };
  action: () => T;
};

export function timedAction<T>({
  delay,
  hooks,
  action,
}: TimedActionOptions<T>) {
  return new Promise<T>(async (resolve, reject) => {
    if (hooks?.onStart) {
      hooks.onStart(reject);
    }

    await Bun.sleep(delay);
    resolve(action());
    hooks?.onEnd && hooks.onEnd();
  });
}
