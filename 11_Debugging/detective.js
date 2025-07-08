function mysteryOperation() {
  const outcome = Math.random(); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}

const numberOfOperations = 20;
const successDay = 13;
const failedDay = 1;
const dayBreak = 3;

let totalDays = 0;
for (i = 0; i < numberOfOperations; i++) {
  //cannot use for..of because  numberOfOperations is a number,for...of is for array, string, set, map
  try {
    mysteryOperation();
    totalDays += successDay;
  } catch (error) {
    totalDays += failedDay;
  } finally {
    totalDays += dayBreak;
  }
}
console.log(totalDays);
