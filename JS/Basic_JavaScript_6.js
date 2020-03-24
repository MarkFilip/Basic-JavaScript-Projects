function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You cannot" : "You can";
    document.getElementById("Vote").innerHTML = Can_Vote + " vote.";
}

function Trip(Duration, Destination, Airline, Cost) {
    this.Trip_Duration = Duration;
    this.Trip_Destination = Destination;
    this.Trip_Airline = Airline;
    this.Trip_Cost = Cost;
}

var Sam = new Trip("5 days", "Arizona", "American Airlines", 300);
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Sam, your trip to " + Sam.Trip_Destination + " for " + Sam.Trip_Duration + " by way of " + Sam.Trip_Airline + " has been cancelled. You will recieve a refund of " + Sam.Trip_Cost + " dollars."
}

function myNest() {
    document.getElementById("Nested_Function").innerHTML= Repeater();
    function Repeater() {
        var Word= "Error!";
        function Repeat() {Word = Word + " " + Word;}
        Repeat();
        Repeat();
        return Word;
    }
}