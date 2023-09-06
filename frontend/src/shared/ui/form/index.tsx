import { ReactNode } from "react";

export type FormProps = {
  onSubmit: () => void;
  children: ReactNode;
};

export const Form = (props: FormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      {props.children}
    </form>
  );
};
