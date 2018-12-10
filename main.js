var calcSetting = prompt("Enter 'b' for a basic calculator, 'a' for an advanced calculator, and 'bmi' to calculate your BMI.");
var output = null;

if (calcSetting == "b") {
  var operation = prompt("Please choose the operation you want to perform: +, -, *, /");
  var numberOne = prompt("Please enter the first number for the calculation");
  var numberTwo = prompt("Please enter the second number for the calculation");

  switch (operation) {
    case "+":
      output = parseFloat(numberOne) + parseFloat(numberTwo);
      break;

    case "-":
      output = parseFloat(numberOne) - parseFloat(numberTwo);
      break;

    case "*":
      output = parseFloat(numberOne) * parseFloat(numberTwo);
      break;

    case "/":
      output = parseFloat(numberOne) / parseFloat(numberTwo);
      break;

    default:
      alert("The character you entered was not expected.");
      break;
  }

  console.log("The result of the operation: " + numberOne + " " + operation + " " + numberTwo + " = " + output);


} else if (calcSetting == "a") {
  var operation = prompt("Please choose the operation you want to perform: sqrt, ^");
  var numberOne = prompt("Please enter the first number for the calculation");

  switch (operation) {
    case "sqrt":
      output = Math.sqrt(parseFloat(numberOne));
      console.log("The result of the operation: sqrt(" + numberOne + ") = " + output);
      break;

    case "^":
      var numberTwo = prompt("Please enter the second number for the calculation");
      output = parseFloat(numberOne) ** parseFloat(numberTwo);
      console.log("The result of the operation: " + numberOne + operation + numberTwo + " = " + output);
      break;

    default:
      alert("The character(s) you entered weren't expected");
      break;
    }

} else if (calcSetting == "bmi") {
  var imperial = prompt("If you want to use the Metric system, enter '0'. If you want to use the Imperial system, enter '1'.");
  var mass = prompt("Enter your weight (Metric: Kilograms, Imperial: Pounds)");
  var height = prompt("Enter your height (Metric: Meters, Imperial: Inches)");

  var bmi = (mass / (height**2) ) * (703 * parseInt(imperial));
  console.log("Your BMI is: " + bmi);

}
