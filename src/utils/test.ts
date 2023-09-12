export function determineWorking(year: string, index: number, events: any) {
  const date = new Date(Number(year), index + 1, 0);
  let days = Number(date.toString().split(" ")[2]) - 4;
  // reduce events if the date is in the month and year
  events.forEach((event: any) => {
    if (
      event.date.split(" ")[0] === date.toString().split(" ")[1] &&
      event.date.split(" ")[2] === date.toString().split(" ")[3]
    ) {
      days -= 1;
    }
  });
  return days;
}
