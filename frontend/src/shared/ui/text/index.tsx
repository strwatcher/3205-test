import { join } from "@/shared/lib/join";
import s from "./text.module.sass";

export type TextProps = {
  children: string;
  centered?: boolean;
};

export const Text = (props: TextProps) => (
  <div className={join(s.text, props.centered && s.centered)}>
    {props.children}
  </div>
);
