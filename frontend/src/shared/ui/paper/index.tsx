import { ReactNode } from "react";
import s from "./paper.module.sass";

export type PaperProps = {
  children: ReactNode;
};

export const Paper = (props: PaperProps) => {
  return <div className={s.paper}>{props.children}</div>;
};
