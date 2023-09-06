import React from "react";

export type ShowProps<T> = {
  children: React.JSX.Element | ((value: T) => React.JSX.Element);
  when: T | false;
  fallback?: React.JSX.Element;
};

export const Show = <T,>(props: ShowProps<T>) => {
  if (!props.when) return props.fallback ?? null;
  if (typeof props.children === "function") return props.children(props.when);
  return <>{props.children}</>;
};
