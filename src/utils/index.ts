export function getDay(day: string) {
  const currentDay = new Date();
  console.log(currentDay);
  let parseCurrentDay = 
    currentDay.getDate() + "/" + 
    ((String(currentDay.getMonth() + 1)).length > 1 ? (currentDay.getMonth() + 1) : "0" + (currentDay.getMonth() + 1)) + "/" +
    currentDay.getFullYear()
  if(parseCurrentDay === day) {
    return "Hoy"
  }
  return day;
}