import { ReactNode } from "react";

import s from "./group.module.sass";
import { join } from "@/shared/lib/join";

export type GroupProps = {
  children: ReactNode;
  grow?: boolean;
};
export const Group = ({ children, grow }: GroupProps) => {
  return <div className={join(s.group, grow && s.grow)}>{children}</div>;
};
