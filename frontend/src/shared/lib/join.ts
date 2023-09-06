export function join(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
