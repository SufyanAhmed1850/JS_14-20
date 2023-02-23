var studentNames = [];

studentNames.push("Student A");
studentNames.push("Student B");
studentNames.push("Student C");

document.write(studentNames + "<br /><br />");

var client = {
    name: [],
    age: [],
    phone: []
};

client.name.push("Client X")
client.name.push("Client Y")
client.name.push("Client Z")

document.write(client.name + "<br /><br />");

var strArr = ["apple", "mango", "orange"];

var numArr = [1, 2, 3];

var bolArr = [true, false]

var mixArr = ["Jon Doe", 49, true]

var eduArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for(i = 0; i < eduArr.length; i++) {
    document.write(i+1 + ") " + eduArr[i] + "<br />")
};
document.write("<br />")

var stdName = ["Student 1", "Student 2", "Student 3"]

var stdNum = [385, 467, 423]

var total = 500

for (i = 0; i < stdName.length; i++) {
    document.write("Score of " + stdName[i] + " is " + stdNum[i] + ". Percentage: " + (stdNum[i]/total * 100) + "<br />")
}
document.write("<br />")

var colorArr = ["Red", "Green", "Blue"]

var firstColor = prompt("Enter a color to add to the beginning of the array:")
var lastColor = prompt("Enter a color to add to the end of the array:")

colorArr.unshift(firstColor)
colorArr.push(lastColor)

for(i = 0; i < colorArr.length; i++) {
    document.write(i + 1 + ") " + colorArr[i] + "<br />")
}

document.write("<br /><br /><br />")
colorArr.unshift("Brown", "Pink")

for(i = 0; i < colorArr.length; i++) {
    document.write(i + 1 + ") " + colorArr[i] + "<br />")
}

document.write("<br /><br /><br />")
colorArr.shift(0)

for(i = 0; i < colorArr.length; i++) {
    document.write(i + 1 + ") " + colorArr[i] + "<br />")
}

document.write("<br /><br /><br />")
colorArr.pop()

for(i = 0; i < colorArr.length; i++) {
    document.write(i + 1 + ") " + colorArr[i] + "<br />")
}

var btColorIndex = +prompt("Enter an index to add a color in the array:")
var btColor = prompt("Enter a color to add at that index in the array:")

document.write("<br /><br /><br />")
colorArr.splice(btColorIndex, 0 , btColor)

for(i = 0; i < colorArr.length; i++) {
    document.write(i + 1 + ") " + colorArr[i] + "<br />")
}

var delColorIndex = +prompt("Enter an index to delete color in the array:")
var delColorNum = +prompt("Enter how many colors you want to delete in the array:")

document.write("<br /><br /><br />")
colorArr.splice(delColorIndex, delColorNum)

for(i = 0; i < colorArr.length; i++) {
    document.write(i + 1 + ") " + colorArr[i] + "<br />")
}
document.write("<br />")

var stdScore = [320, 230, 480, 120]

document.write("Scores of Students: " + stdScore + "<br />")
document.write("Ordered Scores of Students: " + stdScore.sort() + "<br />")
document.write("<br />")

var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

document.write("Cities List: <br />" + citiesList + "<br /><br />")

document.write("Slected Cities List: <br />" + citiesList.slice(2,4) + "<br />")

var strJoinArr = ["This", "is", "my", "cat"];

document.write("Array:<br />" + strJoinArr + "<br /><br />");

document.write("String:<br />" + strJoinArr.join(" "))

var fifoArray = [];

fifoArray.push("first");
fifoArray.push("second");
fifoArray.push("third");

var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();

document.write(firstValue);
document.write(secondValue);
document.write(thirdValue);

var lifoArray = [];

lifoArray.push("first");
lifoArray.push("second");
lifoArray.push("third");

var thirdValue = lifoArray.pop();
var secondValue = lifoArray.pop();
var firstValue = lifoArray.pop();

document.write(firstValue);
document.write(secondValue);
document.write(thirdValue);

document.write("<br /><br />")

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select style="outline: none; padding: 5px 10px; background-color:">');
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");