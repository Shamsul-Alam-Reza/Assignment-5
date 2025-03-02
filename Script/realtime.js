const currentTime = new Date();
let hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";

// Convert hours from 24-hour format to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

const times = `${hours}:${minutes}:${seconds} ${ampm}`;
