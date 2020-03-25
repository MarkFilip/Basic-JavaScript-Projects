function Call_Loop() {
    var Phrase ="It's going to be Legend- Wait for it"
    var Len = Phrase.length
    while (Len < 70) {
        Phrase += ".";
        Len = Phrase.length;
    }
    document.getElementById("Loop").innerHTML = Phrase +"-dary";
}

var Sports = ["Basketball", "Hockey", "Baseball", "Football"];
var Statement = "";
var X;
function for_Loop() {
    for (X = 0; X < Sports.length; X++ ) {
        Statement += Sports[X] + "<br>";
    }
    document.getElementById("For_Loop").innerHTML = Statement;
}

function array_Function() {
    var starting_Lineup = [];
    starting_Lineup[1] = "Kemba Walker";
    starting_Lineup[2] = "Jaylen Brown";
    starting_Lineup[3] = "Jayson Tatum";
    starting_Lineup[4] = "Gordon Hayward";
    starting_Lineup[5] = "Daniel Theis";
    document.getElementById("Array").innerHTML = "Tonight's starting center for the Boston Celtics is: " +starting_Lineup[5];
}

const Snowboard = {brand:"Capita", color:"black", model:"Black Snowboard of Death"};
function constant_Function() {
    Snowboard.color = "red";
    Snowboard.length = 159;
    document.getElementById("Constant").innerHTML = "Nice " + Snowboard.color + " " + Snowboard.brand + " you got there. It's " + Snowboard.length + "? Not too short for ya?";
}

var Z = "Hello";
document.write(Z);
{ 
    let Z= "Goodbye";
    document.write("<br>" + Z + "<br>");
}
document.write(Z);

let hero = {
    name: "Reinhardt",
    HP: 42,
    atk: 48,
    spd: 22,
    def: 31,
    res: 29,
    crit : function() {
        return "Magic is everything!";
    }
};
document.getElementById("Hero").innerHTML = hero.crit();