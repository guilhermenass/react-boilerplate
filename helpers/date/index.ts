export function formatDate(date: string): string {
  if (!date) {
    return "";
  }
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return dateFormatter
    ?.format(new Date(date).setUTCHours(3))
    ?.replace(/ de /g, " ")
    ?.replace(/\./g, "");
}
