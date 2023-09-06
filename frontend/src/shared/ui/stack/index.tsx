import { ReactNode } from "react";
import s from "./stack.module.sass";

export const Stack = ({ children }: { children: ReactNode }) => {
  return <div className={s.stack}>{children}</div>;
};
