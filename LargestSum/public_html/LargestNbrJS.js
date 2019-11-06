var number1 = Number(window.prompt("Enter number 1"));
var number2 = Number(window.prompt("Enter number 2"));
var number3 = Number(window.prompt("Enter number 3"));

if (number1 > number2) {
    if (number2 > number3) {
        document.write("The largest sum is " + (number1 + number2));
    }
    else {
        document.write("the largest sum is " + (number1 + number3));
    }
}
else {
    if (number2 > number3) {
        document.write("The largest sum is " + (number1 + number2));
    }
    else {
        document.write("The largest sum is " + (number1 + number3));
    }
}

