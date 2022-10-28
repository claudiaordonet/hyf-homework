//student manager

const class07Students = [
  "claudia",
  "luciana",
  "maria",
  "cesar",
  "emilio",
  "john",
];

function addStudentToClass(studentName) {
  if (class07Students.push(studentName));
  {
    alert("cant add more");
  }
  if (class07Students.indexOf(studentName) !== -1) {
    alert`student ${studentName} is already in the class`;
  }

  if (class07Students.length < 6 || studentName === "Queen") {
    return "great";
  } else {
    return "sorry no space";
  }
}
const newstudent = addStudentToClass("Queen");
console.log(newstudent);

console.log(class07Students);

const getelement = class07Students.length;

console.log(getelement);
