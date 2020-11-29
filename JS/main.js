function stringzzz() {
    var stringOne = "If you confess with your mouth, 'Jesus is Lord,' ";
    var stringTwo = "and believe in you heart ";
    var stringThree = "that God raised Him ";
    var stringFour = "from the dead, ";
    var stringFive = "you WILL be saved.";
    var stringSix = " -Romans 10:9"
    var getFreeBruh = stringOne.concat(stringTwo, stringThree, stringFour, stringFive, stringSix);
    document.getElementById("string1").innerHTML = getFreeBruh;
}
//concatenating all the string variables in this function using .concat() 
//and displaying it in the connected HTML page



function slicer() {
    var wolverine = "Hey, Bub! The pain lets you know you're still alive.";
    var cut = wolverine.slice(0, 9);
    var intensity = cut.toUpperCase();
    document.getElementById("slice").innerHTML = intensity;

}
//using slice() to pick and choose what areas of the string I want to display
//using toUpperCase() to make all letters in string uppercase
//displaying them through connected HTML page

function weaponX() {
    var xMen = "CLAWS";
    var four = xMen.search("S");
    document.write(four);
}
//using search() to find the index of whatever letter in a string I want to see

function convert1() {
    var num1 = 123445670;
    var num2 = num1.toString();
    document.getElementById("converter").innerHTML = num2;
}

//converting numbers to strings and displaying them in connecting HTML page

function precise() {
    var num1 = 13495439.346983409;

    document.getElementById("precision").innerHTML = num1.toPrecision(10);
}

//using toPrecision() to determine which place the decimal point will be in 



weaponX();
slicer();
stringzzz();
convert1();
precise();
