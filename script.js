// Activity 2: Grade Calculator
function calculateGrade() {
  const score = prompt("Enter a score (0-100):");
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`Score: ${score}, Grade: ${grade}`);
}

// Activity 3: Print Numbers in Range
function printRange() {
  const start = parseInt(prompt("Enter the starting number:"));
  const end = parseInt(prompt("Enter the ending number:"));

  console.log(`Numbers from ${start} to ${end}:`);
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

// Activity 4: Guess the Secret Number
function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guessedNumber;

  console.log("Welcome to Guess the Number!");
  console.log("I'm thinking of a number between 1 and 10");

  do {
    guessedNumber = parseInt(prompt("Enter your guess (1-10):"));
    attempts++;

    if (guessedNumber < secretNumber) {
      console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(
        `Congratulations! You guessed the correct number: ${secretNumber}`
      );
      console.log(`It took you ${attempts} attempts.`);
    }
  } while (guessedNumber !== secretNumber);
}

// Activity 5: Arrays and Objects
function arrayAndObjects() {
  // Step 1: Create students array
  const students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Sarah", age: 21, grade: "B" },
    { name: "Mike", age: 19, grade: "A" },
  ];

  // Step 2: Access second student's name
  console.log("Second student's name:", students[1].name);

  // Step 3: Add new student
  students.push({ name: "Emma", age: 20, grade: "A" });

  // Step 4: Loop through students
  console.log("\nAll students:");
  students.forEach((student) => {
    console.log(`${student.name}: ${student.grade}`);
  });

  // Step 5: Create book object
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  };

  // Step 6: Access book title
  console.log("\nBook title:", book.title);

  // Step 7: Update year
  book.year = 1930;

  // Step 8-9: Add and call getSummary method
  book.getSummary = function () {
    return `${this.title} by ${this.author} (${this.year})`;
  };
  console.log("Book summary:", book.getSummary());

  // Step 10-11: Create and log library array
  const library = [book];
  console.log("\nLibrary:", library);

  // Step 12: Create car object
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
  };

  // Step 13: Access car model
  console.log("\nCar model:", car.model);

  // Step 14: Update car year
  car.year = 2023;

  // Step 15-16: Add and call startEngine method
  car.startEngine = function () {
    console.log(`The ${this.brand} ${this.model}'s engine is starting...`);
  };
  car.startEngine();

  // Step 17-18: Create and log garage array
  const garage = [car];
  console.log("\nGarage:", garage);

  // Step 19-20: Create person object and access age
  const person = {
    name: "Alice",
    age: 25,
    city: "New York",
  };
  console.log("\nPerson's age:", person.age);
}

// Execute all activities
console.log("Activity 2: Grade Calculator");
calculateGrade();

console.log("\nActivity 3: Print Numbers in Range");
printRange();

console.log("\nActivity 4: Guess the Secret Number");
guessNumber();

console.log("\nActivity 5: Arrays and Objects");
arrayAndObjects();
