const mark = {
  mass: 78,
  height: 1.69
};

const john = {
  mass: 92,
  height: 1.95
};

function execute() {
  let BMIMark = calculateBmi(mark);
  let BMIJohn = calculateBmi(john);
  let markHigherBMI = BMIMark > BMIJohn;

  console.log(BMIMark);
  console.log(BMIJohn);
  console.log(markHigherBMI);
}

function calculateBmi(person) {
  return person.mass / (person.height * person.height);
}

execute();