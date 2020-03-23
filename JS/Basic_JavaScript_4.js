var Mercenary = {
    Name: "Ike",
    Game: "Path of Radiance",
    Weapon: "Sword",
    Race: "Beorc",
    Str: 5,
    Special: "Aether!"
}

function my_Dict() {
    delete Mercenary.Name;
    document.getElementById("Dictionary").innerHTML = Mercenary.Name;
}