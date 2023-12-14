

export function formatHour(date: string): string {
  if (!date) {
    return "";
  }

  const formatHour = new Date(date).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return formatHour;
}
