export function cx(
  ...classes: Array<
    string | Record<string, boolean | null | undefined> | null | undefined
  >
): string {
  return classes
    .filter(Boolean)
    .flatMap((arg) => {
      if (typeof arg === "string") {
        return arg;
      } else if (typeof arg === "object" && arg !== null) {
        return Object.keys(arg).filter((key) => arg[key]);
      }
      return [];
    })
    .join(" ");
}

export default cx;
