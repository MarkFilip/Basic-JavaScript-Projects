function Concat() {
    var Sentence1 = "It's going to be legend-";
    var Sentence2 = " Wait for it ";
    var Sentence3 = "-dary! Legendary!";
    var Whole = Sentence1.concat(Sentence2,Sentence3);
    document.getElementById("Concat").innerHTML= Whole;
}

function Misquote() {
    var actual = "No, I am your father.";
    var newSnip = actual.slice(2,21);
    var Whole = "Luke" + newSnip;
    document.getElementById("Slice").innerHTML= Whole;
}

function Shout() {
    var phrase = "I declare bankruptcy!";
    var shout = phrase.toUpperCase();
    document.getElementById("Shout").innerHTML= shout;
}

function Finder() {
    var phrase = "It is our duty to self-quarantine";
    var position = phrase.search("duty");
    document.getElementById("Position").innerHTML= position;
}

function Wordifier() {
    var number = 42;
    var word = number.toString();
    document.getElementById("Word_Number").innerHTML= word;
}

function myRandomizer(var1) {
    var result = Math.random() * var1;
    var better_looker = result.toPrecision(4)
    document.getElementById("math10").innerHTML = "A random number between 1 and " + var1 + ": " + better_looker;
}

function Wordifier_Precise() {
    var number = 42.00099;
    var word = number.toFixed(2);
    document.getElementById("Word_Number_Precise").innerHTML= word;
}

function Value() {
    var life = 42;
    var value = life.valueOf()
    document.getElementById("Value").innerHTML= "Are you sure? Let's see... life = "+ value;
}