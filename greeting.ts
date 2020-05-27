function sayHello(word: string): string {
    return "Hello, " + word;
}
var providedWord = "World";

function showOccupation(occupation: string): string {
    return "Your job title is: " + occupation;
}
var occupationInput = "Developer";



document.getElementById("wordToReplace").innerHTML = sayHello(providedWord);

document.getElementById("jobTitle").innerHTML = showOccupation(occupationInput);