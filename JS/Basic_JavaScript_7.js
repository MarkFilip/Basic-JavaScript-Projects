var X = 34;

function Double_X() {
    document.write(X + X + "<br>");
}

function Add_10() {
    var Y = 10;
    document.write(X + Y + "<br>");
}

function Sub_10() {
    var Y = 10;
    document.write(X - Y + "<br>")
}

Double_X();
Add_10();
Sub_10();

function What_Year() {
    var year= new Date().getFullYear();
    if (year > 1969) {
        document.getElementById("What_Year").innerHTML ="What year is it? " + (year - 1969) + " years! I've been in Jumanji.";
    }
}

if (1<2) {
    document.write("Don't worry, Math is still the same")
}

function Matchup() {
    var atk = document.getElementById("Atk").value
    if (atk > 35) {
        Result = "You dealt " + (atk - 35) + " damage!";
    }
    else {
        Result = "You dealt no damage";
    }
    document.getElementById("Battle").innerHTML = Result;
}