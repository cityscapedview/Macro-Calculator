const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const userWeight = fd.get("weight");
  const userHeight = fd.get("height");
  const userAge = fd.get("age");
  const userActivity = fd.get("activity");
  const userGender = fd.get("gender");
  const userGoal = fd.get("goal");

  let goalFactor = activityLevel(userActivity);
  console.log(goalFactor);

  let rGoal = calculateCalories(
    userWeight,
    userHeight,
    userGender,
    userAge,
    goalFactor
  );
  console.log(rGoal);

  let cGoal = calGoal(rGoal, userGoal);
  console.log(cGoal);

  let mGoal = macroCal(userWeight, rGoal);
  console.log(mGoal);

  // toggles results to become visible
  const visResults = document.querySelector(".results-box");
  visResults.classList.remove("invisible");

  // adds results to results section
  // This needs to be replaced with a function that can iterate
  // through an array of the goal variables
  // Just wanted to get it running before refactoring

  let addIteminput1 = document.querySelector(".maint-results p");
  addIteminput1.innerText = rGoal;

  let addIteminput2 = document.querySelector(".goal-results p");
  addIteminput2.innerText = cGoal;

  let addIteminput3 = document.querySelector(".macro-results p");
  addIteminput3.innerText = `Protein:${mGoal.protGoal} Carbs:${mGoal.carbGoal} Fat:${mGoal.fatGoal}`;
});

// Function Calorie Goal
// User inserts bodyweight in lbs  multiply it by 15 = maintenance weight
// let mainCal = userWeight * 15;
// reduce weight by 250-500 cals
// increase weight by 250-500 cals
// This might be better as a switch statement: case 1 weight gain case 2 weight loss case 3 maintenance

/// returning early - look up.  create object that has each key: value; looking up activity vs key
function activityLevel(activity) {
  switch (activity) {
    case "sedentary":
      return 1.2;
    case "light activity":
      return 1.375;
    case "moderate activity":
      return 1.55;
    case "very activite":
      return 1.725;
  }
}
function lb2kg(lb) {
  return lb / 2.205;
}

function inch2cm(inch) {
  return inch * 2.54;
}

function getGenderFactor(gender) {
  const genderFactor = {
    male: 5,
    female: -161,
  };
  if (!genderFactor[gender]) {
    throw new Error("invalid gender");
  }
  return genderFactor[gender];
}

function calculateCalories(weight, height, gender, age, goalFactor) {
  return Math.round(
    (10 * lb2kg(weight) +
      6.25 * inch2cm(height) -
      5 * age +
      getGenderFactor(gender)) *
      goalFactor
  );
}

function calGoal(rCal, goal) {
  let mainCal = rCal;
  if (goal == "gain") {
    return Math.round(mainCal * 1.15);
  } else if (goal == "lose") {
    return Math.round(mainCal * 0.8);
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

//Update to include logic to determine if macro calories equal calories
//Potential new features include different macro splits for higher protein

function macroCal(weight, mainCal) {
  let protGoal = Math.round(weight);
  let fatGoal = Math.round(weight * 0.4);
  mainCal -= Math.round(protGoal * 4 + fatGoal * 9);
  let carbGoal = Math.floor(mainCal / 4);
  return {
    protGoal,
    fatGoal,
    carbGoal,
  };
}
