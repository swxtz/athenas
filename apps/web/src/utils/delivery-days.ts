
export function getDeliveryInfo(date: string): string {
  const today = new Date();
  const delivery = new Date(date);
  const timeDiff = delivery.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 7) {
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return delivery.toLocaleDateString("pt-BR", options); // Retorna o dia da semana
  } else {
    const day = String(delivery.getDate()).padStart(2, "0");
    const month = String(delivery.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`; // Retorna DD/MM
  }
}

