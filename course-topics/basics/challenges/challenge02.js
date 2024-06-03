const mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69
};

const john = {
  name: 'John',
  mass: 92,
  height: 1.95
};

function execute() {
  let BMIMark = calculateBmi(mark);
  let BMIJohn = calculateBmi(john);

  if (BMIMark > BMIJohn) {
    console.log(`${mark.name}'s BMI (${BMIMark}) is higher than ${john.name}'s (${BMIJohn})!`);
  } else {
    console.log(`${john.name}'s BMI (${BMIJohn}) is higher than ${mark.name}'s (${BMIMark})!`);
  }
}

function calculateBmi(person) {
  return person.mass / (person.height * person.height);
}

execute();