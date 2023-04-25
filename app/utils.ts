export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function* numberRange(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export function spacesToHyphens(str: string) {
  return str.replace(/\s/g, "-").toLowerCase();
}
