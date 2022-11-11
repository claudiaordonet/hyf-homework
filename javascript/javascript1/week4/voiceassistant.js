const Name = [];
const toDoList = [];

function getReply(command) {
  for (i = 0; i < Name.length; i++);

  const NewName = "benjamin";
  Name.push(NewName);

  if (command.includes("benjamin")) {
    console.log(`hi my name is ${NewName}`);
    return `hello  ${NewName} nice to meet you`;
  } else if (command === "what is my name?") {
    const anotherName = "claudia";
    Name.push(anotherName);
    return `my name is  ${anotherName}`;
  }

  if (command === "fishing") {
    for (i = 0; i < toDoList.length; i++) {
      toDoList.push("fishing");
      console.log(toDoList);
      return "Fishing was added to my to do list";
    }
  } else if (command === "singing") {
    for (i = 0; i < toDoList.length; i++) {
      toDoList.push("singing in the shower");
      console.log(toDoList);
      return "singing was added";
    }
  } else if (command === "remove") {
    toDoList.indexOf("fishing");
    return "removed fishing from your todo list";
  } else if (command === "show") {
    const allActivities = ["fishing", "singing in the shower", "yoga"];
    const showthemall = [].concat(allActivities, toDoList);
    console.log("what is on my to do today?");
    return showthemall;
  } else if (command === "date") {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let format = day / month / year;

    console.log("which day is today");

    return today;
  } else if (command.startsWith("what is")) {
    const calculation = command.slice(8, -1);
    console.log(eval(calculation));
  } else if (command.includes("set a timer")) {
    console.log(`Timer set for 4 minutes`);

    setTimeout(() => {
      return "Time done";
    }, 240000);
  } else {
    console.log(`it was not clear, repeat once again`);
  }
}

console.log(getReply("benjamin"));
console.log(getReply("what is my name?"));
console.log(getReply("fishing"));
console.log(getReply("singing"));
console.log(getReply("remove"));
console.log(getReply("show"));
console.log(getReply("date"));
console.log(getReply("what is"));
console.log(getReply("set a timer"));
