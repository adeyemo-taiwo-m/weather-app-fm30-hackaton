function formatDate(date) {
  return date?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTo12Hour(timeString) {
  const date = new Date(timeString);
  return date.toLocaleTimeString([], { hour: "numeric", hour12: true });
}

export { formatDate, formatTo12Hour };
