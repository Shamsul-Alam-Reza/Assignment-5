const currentDate = new Date();
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const getDate = currentDate
  .toLocaleDateString("en-US", options)
  .replace(/,/g, ""); // Remove commas to match your desired format

const [weekday, month, day, year] = getDate.split(" ");

const realDate = `${weekday} <b> ,</b>  <br /> <b>${month} ${day} ${year}</b> `;

// Display date
document.getElementById("current-date").innerHTML = realDate;
