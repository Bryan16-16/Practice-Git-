let tasks = [
  { name: "eat", status: "pending" },
  { name: "code", status: "pending" },
  { name: "sleep", status: "done" },
];
//for pending status
function pendingFunction() {
  var groupedPeople = groupArrayOfObjects(tasks, "status");

  for (const numberPending of groupedPeople.pending) {
    const pendingT = document.getElementById("pending");
    let liCreate = document.createElement("li");

    var ar = Object.values(numberPending.name);

    let concatArr = ar.join(" ");

    liCreate.appendChild(document.createTextNode(concatArr));
    pendingT.appendChild(liCreate);
  }
}
//for done status
function doneFunction() {
  var groupedPeople = groupArrayOfObjects(tasks, "status");

  for (const numberPending of groupedPeople.done) {
    const doneT = document.getElementById("done");
    let liCreate = document.createElement("li");

    var ar = Object.values(numberPending.name);

    let concatArr = ar.join(" ");

    liCreate.appendChild(document.createTextNode(concatArr));
    doneT.appendChild(liCreate);
  }
}
//function for filtering status
function groupArrayOfObjects(list, key) {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

pendingFunction();
doneFunction();

// declaration for input text and button
const inButton = document.querySelector(".inButton");

function addTaskToObject() {
  // new task declaration
  let newTask = [];

  const textAdd = document.getElementById("textAdd");
  newTask.push(textAdd.value);

  const pendingT = document.getElementById("pending");

  let liCreate = document.createElement("li");
  liCreate.appendChild(document.createTextNode(newTask));
  pendingT.appendChild(liCreate);
  //to clear text field after a click and focus to the input text field
  textAdd.value = " ";
  textAdd.focus();
}

// Add Task button event listener
inButton.addEventListener("click", forEmptyInput);

function forEmptyInput() {
  //for empty input
  if (textAdd.value == " " || textAdd.value == '') {
    alert("The text field is empty");
  } else {
    addTaskToObject();
  }
}

//testing


//testing git with vs code