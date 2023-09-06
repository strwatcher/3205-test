import { ReactNode } from "react";
import s from "./button.module.sass";

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
};

export const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className={s.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
