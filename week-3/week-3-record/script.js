// Experiment No: 03

                        // Title: JavaScript Functions and Arrays

// Aim: To demonstrate the use of functions and arrays in JavaScript.                        

const studentNames = ["Aisha", "Noah", "Mila", "Ethan"];
const studentAges = [18, 20, 19, 22];

function greetStudent(name) {
  return `Hi ${name}! Welcome to the class.`;
}

function listStudents(names) {
  return names.join(", ");
}

function totalAge(ages) {
  return ages.reduce((sum, age) => sum + age, 0);
}

function averageAge(ages) {
  if (ages.length === 0) {
    return 0;
  }

  return totalAge(ages) / ages.length;
}

console.log("Our class today includes:", listStudents(studentNames));
console.log(studentNames.map(greetStudent).join("\n"));
console.log("Total age of the group:", totalAge(studentAges));
console.log("Average age of the group:", averageAge(studentAges));

// Result: The JavaScript code demonstrates the use of functions and arrays by greeting students, listing their names, calculating total age, and finding the average age.