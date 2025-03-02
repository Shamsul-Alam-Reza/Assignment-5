function getInnerText(id) {
  let taskElement = document.getElementById(id);
  let taskText = taskElement.innerText;
  let taskCount = parseInt(taskText);
  return taskCount;
}

function setText(id, value) {
  document.getElementById(id).innerText = value;
}

document
  .getElementById("myButton-one")
  .addEventListener("click", function (event) {
    const number = getInnerText("assigned-task");

    if (number > 1) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
    } else if (number > 0) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
      alert("Congrats!!! You have completed all the current task.");
    } else {
      return alert("kaj nai r");
    }

    let completeElement = document.getElementById("com-task");
    let completeText = completeElement.innerText;
    let completeCount = parseInt(completeText);
    let completeAfter = completeCount + 1;
    completeElement.innerText = completeAfter;

    let problemElement = document.getElementById("problem-one");
    let problemTitle = problemElement.innerText;

    let historyElement = document.getElementById("history-container");
    let p = document.createElement("p");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    const times = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the task ${problemTitle} at ${times}`;
    p.style.margin = "10px";
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "#F4F7FF";
    historyElement.appendChild(p);

    document.getElementById("myButton-one").disabled = true;
    event.preventDefault();
  });

//   for Button two
document
  .getElementById("myButton-two")
  .addEventListener("click", function (event) {
    const number = getInnerText("assigned-task");

    if (number > 1) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
    } else if (number > 0) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
      alert("Congrats!!! You have completed all the current task.");
    } else {
      return alert("kaj nai r");
    }

    let completeElement = document.getElementById("com-task");
    let completeText = completeElement.innerText;
    let completeCount = parseInt(completeText);
    let completeAfter = completeCount + 1;
    completeElement.innerText = completeAfter;

    let problemElement = document.getElementById("problem-two");
    let problemTitle = problemElement.innerText;

    let historyElement = document.getElementById("history-container");
    let p = document.createElement("p");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    const times = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the task ${problemTitle} at ${times}`;
    p.style.margin = "10px";
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "#F4F7FF";
    historyElement.appendChild(p);

    document.getElementById("myButton-two").disabled = true;
    event.preventDefault();
  });

//  for Button three
document
  .getElementById("myButton-three")
  .addEventListener("click", function (event) {
    const number = getInnerText("assigned-task");

    if (number > 1) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
    } else if (number > 0) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
      alert("Congrats!!! You have completed all the current task.");
    } else {
      return alert("kaj nai r");
    }

    let completeElement = document.getElementById("com-task");
    let completeText = completeElement.innerText;
    let completeCount = parseInt(completeText);
    let completeAfter = completeCount + 1;
    completeElement.innerText = completeAfter;

    let problemElement = document.getElementById("problem-three");
    let problemTitle = problemElement.innerText;

    let historyElement = document.getElementById("history-container");
    let p = document.createElement("p");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    const times = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the task ${problemTitle} at ${times}`;
    p.style.margin = "10px";
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "#F4F7FF";
    historyElement.appendChild(p);

    document.getElementById("myButton-three").disabled = true;
    event.preventDefault();
  });

//   button four start

document
  .getElementById("myButton-four")
  .addEventListener("click", function (event) {
    const number = getInnerText("assigned-task");

    if (number > 1) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
    } else if (number > 0) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
      alert("Congrats!!! You have completed all the current task.");
    } else {
      return alert("kaj nai r");
    }

    let completeElement = document.getElementById("com-task");
    let completeText = completeElement.innerText;
    let completeCount = parseInt(completeText);
    let completeAfter = completeCount + 1;
    completeElement.innerText = completeAfter;

    let problemElement = document.getElementById("problem-four");
    let problemTitle = problemElement.innerText;

    let historyElement = document.getElementById("history-container");
    let p = document.createElement("p");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    const times = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the task ${problemTitle} at ${times}`;
    p.style.margin = "10px";
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "#F4F7FF";
    historyElement.appendChild(p);

    document.getElementById("myButton-four").disabled = true;
    event.preventDefault();
  });

//   Button five start
document
  .getElementById("myButton-five")
  .addEventListener("click", function (event) {
    const number = getInnerText("assigned-task");

    if (number > 1) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
    } else if (number > 0) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
      alert("Congrats!!! You have completed all the current task.");
    } else {
      return alert("kaj nai r");
    }

    let completeElement = document.getElementById("com-task");
    let completeText = completeElement.innerText;
    let completeCount = parseInt(completeText);
    let completeAfter = completeCount + 1;
    completeElement.innerText = completeAfter;

    let problemElement = document.getElementById("problem-five");
    let problemTitle = problemElement.innerText;

    let historyElement = document.getElementById("history-container");
    let p = document.createElement("p");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    const times = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the task ${problemTitle} at ${times}`;
    p.style.margin = "10px";
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "#F4F7FF";
    historyElement.appendChild(p);

    document.getElementById("myButton-five").disabled = true;
    event.preventDefault();
  });

//   Button Six Start

document
  .getElementById("myButton-six")
  .addEventListener("click", function (event) {
    const number = getInnerText("assigned-task");

    if (number > 1) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
    } else if (number > 0) {
      let taskafterdo = number - 1;
      setText("assigned-task", taskafterdo);
      alert("Board Updated Succesfully.");
      alert("Congrats!!! You have completed all the current task.");
    } else {
      return alert("kaj nai r");
    }

    let completeElement = document.getElementById("com-task");
    let completeText = completeElement.innerText;
    let completeCount = parseInt(completeText);
    let completeAfter = completeCount + 1;
    completeElement.innerText = completeAfter;

    let problemElement = document.getElementById("problem-six");
    let problemTitle = problemElement.innerText;

    let historyElement = document.getElementById("history-container");
    let p = document.createElement("p");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    const times = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the task ${problemTitle} at ${times}`;
    p.style.margin = "10px";
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.backgroundColor = "#F4F7FF";
    historyElement.appendChild(p);

    document.getElementById("myButton-six").disabled = true;
    event.preventDefault();
  });

//   History Clear Button
document.getElementById("clearButton").addEventListener("click", function () {
  let historyElement = document.getElementById("history-container");
  historyElement.innerHTML = "";
});
