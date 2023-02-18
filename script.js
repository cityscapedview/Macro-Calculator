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

  let a = activityLevel(userActivity);
  console.log(a);

  let rGoal = restGoal(userWeight, userHeight, userGender, userAge, a);
  console.log(rGoal);

  let cGoal = calGoal(rGoal, userGoal);
  console.log(cGoal);

  let mGoal = macroCal(userWeight, rGoal);
  console.log(mGoal);

  // toggles results to become visible
  const visResults = document.querySelector(".invisible");
  visResults.classList.toggle("invisible");

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

// no variable restCalories required.  DRY. make common equation variable, and kg and cm conversions in calculate variable.
// + (gender === "male" ? 5 : -161)
function restGoal(weight, height, gender, age, a) {
  weight /= 2.205;
  height *= 2.54;
  let restCalories = 0;
  if (gender == "male") {
    let restCalories = 10 * weight + 6.25 * height - 5 * age + 5;
    return (restCalories *= a);
  } else {
    let restCalories = 10 * weight + 6.25 * height - 5 * age - 161;
    return (restCalories *= a);
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
