function myAddition(var1,var2) {
    var result = var1 + var2;
    document.getElementById("math").innerHTML = var1 + " + " + var2 + " = " + result;
}

function mySubtraction(var1,var2) {
    var result = var1 - var2;
    document.getElementById("math2").innerHTML = var1 + " - " + var2 + " = " + result;
}

function myMultiplication(var1,var2) {
    var result = var1 * var2;
    document.getElementById("math3").innerHTML = var1 + " * " + var2 + " = " + result;
}

function myDivision(var1,var2) {
    var result = var1 / var2;
    document.getElementById("math4").innerHTML = var1 + " / " + var2 + " = " + result;
}

function myCompMath(var1) {
    var result = ((3 * var1) + 25 ) / 10 ;
    document.getElementById("math5").innerHTML = "If " + var1 + " is tripled and then 25 is added, the result when divided by 10 is: " + result;
}

function myModulus(var1, var2) {
    var result = var1 % var2 ;
    document.getElementById("math6").innerHTML = "If " + var1 + " is divided by " + var2 + ", the remainder is: " + result;
}

function myNegation(var1) {
    var result = -var1
    document.getElementById("math7").innerHTML = "The negation of " + var1 + " is: " + result;
}

function myIncrement(var1) {
    orig = var1;
    var1++;
    document.getElementById("math8").innerHTML = orig + " increases to: " + var1 ;
}

function myDecrement(var1) {
    orig = var1;
    var1--;
    document.getElementById("math9").innerHTML = orig + " decreases to: " + var1;
}

function myRandomizer(var1) {
    var result = Math.random() * var1;
    document.getElementById("math10").innerHTML = "A random number between 1 and " + var1 + ": " + result;
}

function mySqrt(var1) {
    var result = Math.sqrt(var1);
    document.getElementById("math11").innerHTML = "The square root of " + var1 + " is: " + result;
}