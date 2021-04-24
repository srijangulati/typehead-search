export function dateDiff(createdAt: number,) {
  const startDate = new Date(createdAt);
  const endDate = new Date();
  const startYear = startDate.getFullYear();

  const yearDiff = endDate.getFullYear() - startYear;
  if (yearDiff) {
    return `${yearDiff} years`;
  }
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff) {
    return `${monthDiff} months`;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff) {
    return `${dayDiff} days`;
  }
}

export function debounce(fn: Function, time: number){
  let timeout: any;
  return (args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      fn(args);
    }.bind(this), time);
  }
}