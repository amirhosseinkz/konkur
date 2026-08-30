export const persianLocale = "fa-IR" as const;
export const persianDirection = "rtl" as const;

export function formatPersianNumber(value: number): string {
  return new Intl.NumberFormat(persianLocale).format(value);
}
