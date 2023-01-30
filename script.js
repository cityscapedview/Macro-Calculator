// MACRO CALCULATOR L33T CODE HERE
let userWeight = 155;
let userGender = ;
let userWeightGoal = ;

// User inserts bodyweight in lbs  multiply it by 15 = maintenance weight
let mainCal = userWeight * 15;
// reduce weight by 250-500 cals
// increase weight by 250-500 cals
// This might be better as a switch statement: case 1 weight gain case 2 weight loss case 3 maintenance
if (userWeight = true) {
  return mainCal -= 250;
} else if (userWeight = false) {
  return mainCal += 250;
} else {
  return mainCal;
}

// protein= 4 calories per gram, fat= 9 calories per gram,  carb= 4 calories per gram
// Protein: 1g per body weight.  
let proteinGoal = userWeight;
let macroCal = proteinGoal * 4;
// Fat: minimun of 10-25g per day.
let fatGoal = .03 x userWeight;
macroCal += (9 x fatGoal);
// Carbs: 1-3g per gram.  Calculate fat and protein and then remainder can be carbs.
let carbGoal = (mainCal - macroCal) / 4;


// To Do List: 
// Find a way to make buttons generate user Input.
// Find a way to have javascrip present calculations on website page.