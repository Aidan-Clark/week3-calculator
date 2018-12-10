var calcSetting = prompt("Enter 'b' for a basic calculator, 'a' for an advanced calculator, 'bmi' to calculate your BMI, and 'trip' to calculate trip times and price");
var output = null;

if (calcSetting == "b") {
  var operation = prompt("Please choose the operation you want to perform: +, -, *, /");
  var numberOne = parseFloat(prompt("Please enter the first number for the calculation"));
  var numberTwo = parseFloat(prompt("Please enter the second number for the calculation"));

  switch (operation) {
    case "+":
      output = numberOne + numberTwo;
      break;

    case "-":
      output = numberOne - numberTwo;
      break;

    case "*":
      output = numberOne * numberTwo;
      break;

    case "/":
      output = numberOne / numberTwo;
      break;

    default:
      alert("The character you entered was not expected.");
      break;
  }

  console.log("The result of the operation: " + numberOne + " " + operation + " " + numberTwo + " = " + output);


} else if (calcSetting == "a") {
  var operation = prompt("Please choose the operation you want to perform: sqrt, ^");
  var numberOne = parseFloat(prompt("Please enter the first number for the calculation"));

  switch (operation) {
    case "sqrt":
      output = Math.sqrt(numberOne);
      console.log("The result of the operation: sqrt(" + numberOne + ") = " + output);
      break;

    case "^":
      var numberTwo = parseFloat(prompt("Please enter the second number for the calculation"));
      output = numberOne ** numberTwo;
      console.log("The result of the operation: " + numberOne + operation + numberTwo + " = " + output);
      break;

    default:
      alert("The character(s) you entered weren't expected");
      break;
    }

} else if (calcSetting == "bmi") {
  var imperial = parseInt(prompt("If you want to use the Metric system, enter '0'. If you want to use the Imperial system, enter '1'."));
  var mass = parseFloat(prompt("Enter your weight (Metric: Kilograms, Imperial: Pounds)"));
  var height = parseFloat(prompt("Enter your height (Metric: Meters, Imperial: Inches)"));

  var bmi = mass / (height**2);

  if (imperial == 1) {
    bmi *= 703;
  }

  var health = null;

  if (bmi < 18.5) {
    health = "Underweight";
  } else if (18.5 <= bmi < 25) {
    health = "Healthy";
  } else if (25 <= bmi < 30) {
    health = "Overweight";
  } else {
    health = "Obese";
  }

  console.log("Your BMI is " + bmi + ": " + health);

} else if (calcSetting == "trip") {
  var distance = parseFloat(prompt("Enter the distance you need to travel (miles): "));
  var mpg = parseFloat(prompt("Enter the fuel efficiency of your car (miles per gallon): "));
  var cpg = parseFloat(prompt("Enter the price of fuel (£ per gallon): "));
  var speed = parseFloat(prompt("Enter the speed you will be travelling (mph): "));

  if (speed > 60) {
    mpg -= (speed - 60) * 2;
  }

  if (mpg < 1) {
    mpg = 1;
  }

  var time = (distance / speed);
  var gallons = (distance / mpg);
  var cost = (gallons * cpg);

  console.log("Your trip will take " + time + " hours and cost £" + cost);
}
