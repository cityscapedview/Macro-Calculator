const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const userWeight = fd.get("weight");
  const userGender = fd.get("gender");
  const userGoal = fd.get("goal");
  const userHeight = fd.get("height");

  let x = restGoal(userWeight, userHeight, userGender, 33);
  console.log(x);

  let y = calGoal(x, userGoal);
  console.log(y);

  let z = macroCal(userWeight, x);
  console.log(z);
});

// Function Calorie Goal
// User inserts bodyweight in lbs  multiply it by 15 = maintenance weight
// let mainCal = userWeight * 15;
// reduce weight by 250-500 cals
// increase weight by 250-500 cals
// This might be better as a switch statement: case 1 weight gain case 2 weight loss case 3 maintenance

function restGoal(weight, height, gender, age) {
  weight /= 2.205;
  height *= 2.54;
  let restCalories = 0;
  if (gender == "male") {
    return (restCalories = 10 * weight + 6.25 * height - 5 * age + 5) * 1.2;
  } else {
    return (restCalories = 10 * weight + 6.25 * height - 5 * age - 161) * 1.2;
  }
}

function calGoal(rCal, goal) {
  let mainCal = rCal;
  if (goal == "gain") {
    return (mainCal *= 1.15);
  } else if (goal == "lose") {
    return (mainCal *= 0.8);
  } else {
    return mainCal;
  }
}

// protein= 4 calories per gram, fat= 9 calories per gram,  carb= 4 calories per gram
// Protein: 1g per body weight.
// let proteinGoal = userWeight;
// let macroCal = proteinGoal * 4;
// Fat: minimun of 10-25g per day.
// let fatGoal = .03 x userWeight;
// macroCal += (9 x fatGoal);
// Carbs: 1-3g per gram.  Calculate fat and protein and then remainder can be carbs.
// let carbGoal = (mainCal - macroCal) / 4;

function macroCal(weight, mainCal) {
  let protGoal = weight;
  let fatGoal = weight * 0.4;
  mainCal -= protGoal * 4 + fatGoal * 9;
  let carbGoal = Math.floor(mainCal / 4);
  return {
    protGoal,
    fatGoal,
    carbGoal,
  };
}
