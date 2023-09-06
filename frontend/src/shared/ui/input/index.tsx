import { useId } from "react";
import s from "./input.module.sass";
import { Show } from "@/shared/lib/show";

export type InputProps = {
  onChange: (value: string) => void;
  error?: string;
  value: string;
  label: string;
};

export const Input = (props: InputProps) => {
  const id = useId();
  const inputId = `input_${id}`;

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={inputId}>
        {props.label}
      </label>
      <input
        id={inputId}
        className={s.input}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <Show when={props.error}>
        <span className={s.error}>{props.error}</span>
      </Show>
    </div>
  );
};
