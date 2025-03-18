/*
function Monday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Friday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

Monday();
Tuesday();
Wednesday();
Thursday();
Friday();

console.log("Combine similar activites");

function runFiveMiles() {
  console.log("Go for a five-mile run");
}
function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function Monday() {
  runFiveMiles();
  liftWeights();
}
Monday();
console.log(
  "Depending on the postRunActivity we can combine the function as below"
);
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
}

exerciseRoutine(liftWeights());

exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});

exerciseRoutine();


function runFiveMiles() {
  console.log("Go for a five-mile run");
}
function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

morningRoutine(liftWeights);
*/

function receivesAFunction(callback) {
  callback();
}

receivesAFunction(() => console.log("Callback function executed!"));

function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function");
  }
  return namedFunction;
}

const func = returnsANamedFunction();
func();

function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function");
  };
}

const func1 = returnsAnAnonymousFunction();
func1();
