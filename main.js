function basicInput() {
  var operation = prompt("Please choose the operation you want to perform: +, -, *, /");
  if (basicOperationCheck(operation)) {
    var numberOne = prompt("Please enter the first number for the calculation");
    var numberTwo = prompt("Please enter the second number for the calculation");

    if (isNaN(numberOne) == false && isNaN(numberTwo) == false) {
      basicCalculator(operation, parseFloat(numberOne), parseFloat(numberTwo));
    } else {
      alert("Please enter a valid number");
    }

  } else {
    alert("Please enter a valid operation");
  }
}


function basicOperationCheck(operation) {
  switch (operation) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;

    default:
      return false;
  }
}


function basicCalculator(operation, numberOne, numberTwo) {
  result = eval(numberOne + operation + numberTwo);
  alert("The result of the operation: " + numberOne + " " + operation + " " + numberTwo + " = " + result);

}


function advancedInput() {
  var operation = prompt("Please choose the operation you want to perform: sqrt, ^");

  if (advancedOperationCheck(operation)) {
    var numberOne = prompt("Please enter the first number for the calculation");

    if (isNaN(numberOne) == false) {
        advancedCalculator(operation, parseFloat(numberOne));
    } else {
      alert("Please enter a valid number")
    }

  } else {
    alert ("Please enter a valid operation")
  }
}


function advancedOperationCheck(operation) {
  switch (operation) {
    case "sqrt":
    case "^":
      return true;

    default:
      return false;
  }
}


function advancedCalculator(operation, numberOne) {
  switch (operation) {

    case "sqrt":
      output = Math.sqrt(numberOne);
      alert("The result of the operation: sqrt(" + numberOne + ") = " + output);
      break;

    case "^":
      var numberTwo = prompt("Please enter the second number for the calculation");
      if (isNaN(numberTwo) == false) {
        output = numberOne ** parseFloat(numberTwo);
        alert("The result of the operation: " + numberOne + operation + numberTwo + " = " + output);
      } else {
        alert("Please enter a valid number");
      }

      break;
    }
}


function bmiInput() {
  var imperial = prompt("If you want to use the Metric system, enter '0'. If you want to use the Imperial system, enter '1'.");
  if (imperial == "0" || imperial == "1") {
    var mass = prompt("Enter your weight (Metric: Kilograms, Imperial: Pounds)");
    var height = prompt("Enter your height (Metric: Meters, Imperial: Inches)");

    if (isNaN(mass) == false && isNaN(height) == false) {
      bmiCalculator(parseInt(imperial), parseFloat(mass), parseFloat(height));
    } else {
      alert("Please enter a valid number");
    }

  } else {
    alert("Please enter either a 1 or 0.")
  }
}


function bmiCalculator(imperial, mass, height) {
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
  alert("Your BMI is " + bmi + ": " + health);
}

function tripInput() {
  var distance = prompt("Enter the distance you need to travel (miles): ");
  var mpg = prompt("Enter the fuel efficiency of your car (miles per gallon): ");
  var cpg = prompt("Enter the price of fuel (£ per gallon): ");
  var speed = prompt("Enter the speed you will be travelling (mph): ");

  if (isNaN(distance) == false && isNaN(mpg) == false && isNaN(cpg) == false && isNaN(speed) == false) {
    tripCalculation(parseFloat(distance), parseFloat(mpg), parseFloat(cpg), parseFloat(speed));
  } else {
    alert("Please enter a valid number.");
  }
}


function tripCalculation(distance, mpg, cpg, speed) {
  if (speed > 60) {
    mpg -= (speed - 60) * 2;
  }

  if (mpg < 1) {
    mpg = 1;
  }

  var time = (distance / speed);
  var gallons = (distance / mpg);
  var cost = (gallons * cpg);

  alert("Your trip will take " + time + " hours and cost £" + cost);
}

keepRunning = true;

while (keepRunning == true) {
  var calcSetting = prompt("Enter 'b' for a basic calculator, 'a' for an advanced calculator, 'bmi' to calculate your BMI, 'trip' to calculate trip times and price, and 'x' to close the program");
  var output = null;

  if (calcSetting == "b") {
    basicInput();

  } else if (calcSetting == "a") {
    advancedInput();

  } else if (calcSetting == "bmi") {
    bmiInput();

  } else if (calcSetting == "trip") {
    tripInput();

  } else if (calcSetting == "x") {
    keepRunning = false;

  } else {
    alert("Please enter a correct input.")
  }
}
