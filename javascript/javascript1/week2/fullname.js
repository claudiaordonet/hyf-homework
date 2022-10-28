//formal fullname

function getFullname(firstname, surname, userformalName) {
  if (userformalName === true) {
    return "lord" + firstname + surname;
  } else {
    return firstname + surname;
  }
}

const fullname3 = getFullname("Benjamin", "Hughes", true);
console.log(fullname3);

const fullname4 = getFullname("Benjamin", "Hughes", false);
console.log(fullname4);

const fullname5 = getFullname();
console.log(fullname5);

function getFullname1(firstname, surname, userformalName1) {
  if (userformalName1 === true) {
    return "madame" + firstname + surname;
  } else {
    return firstname + surname;
  }
}

const fullname6 = getFullname1("maria", "smith", true);
console.log(fullname6);

const fullname7 = getFullname1("maria", "smith", false);
console.log(fullname7);
