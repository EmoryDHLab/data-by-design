export function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export function* numberRange(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export function scrollToAnchor(hash: string) {
  document.getElementById(hash.replace("#", ""))?.scrollIntoView({ block: start });
}
