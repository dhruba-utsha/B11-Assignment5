const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const today = new Date();
const year = today.getFullYear();
const month = months[today.getMonth()];
const date = today.getDate();
const day = days[today.getDay()];

document.getElementById("day").innerText = `${day} ,`;
document.getElementById("date").innerText = `${date} ${month} ${year}`;
