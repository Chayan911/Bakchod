// Arr reverse
function reverseStringArr(str)
{
    return str.split("").reverse().join("");
}
console.log(reverseStringArr("reverseStringArr"));
reverseStringArr("reverseStringArr");

//using for loop
function reverseStringLoop(str)
{
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--)
    {
        newString += str[i];
    }
    return newString;
}
console.log(reverseStringLoop("reverseStringLoop"));
reverseStringLoop('reverseStringLoop');

//using recursion
function reverseStringRecursion(str)
{
    if (str === "")
        return "";
    else
        return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}
console.log(reverseStringRecursion("reverseStringRecursion"));
reverseStringRecursion("reverseStringRecursion");


//using ternary operator
function reverseStringTernary(str)
{
    return (str === '') ? '' : reverseStringTernary(str.substr(1)) + str.charAt(0);
}
console.log(reverseStringTernary("reverseStringTernary"));
reverseStringTernary("reverseStringTernary");
