// var arrOfArrs = [
//     [1.0, 1.1, 1.2],
//     [2.0, 2.1, 2.2],
//     [3.0, 3.1, 3.2]
// ];

// document.write(arrOfArrs[0] [2] + "<br />")
// document.write(arrOfArrs[1] [1] + "<br />")
// document.write(arrOfArrs[2] [0] + "<br /><br />")

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// document.write("<table>");
// for (var i = 0; i < matrix.length; i++) {
//   document.write("<tr>");
//   for (var j = 0; j < matrix[i].length; j++) {
//     document.write("<td>" + matrix[i][j] + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table><br />");

// for (i = 1; i <= 100; i++) {
//   document.write(i + "<br />")
// }

function mltTable() {
  var num = document.getElementById("num").value;
  var len = document.getElementById("len").value;
  var table = "";

  for (var i = 0; i <= len; i++) {
    table += num + " x " + i + " = " + (num*i) + "<br />";
  }
    document.getElementById("table").innerHTML = table;
}

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i <= fruits.length; i++) {
//   document.write(fruits[i] + "<br />")
// }

// document.write("<br />")

// for (var i = 0; i <= fruits.length; i++) {
//   document.write("Element at index " + i + "is " + fruits[i] + "<br />")
// }

// document.write("<h1>Counting:</h1>")
// for (var i = 1; i <= 15; i++) {
//   document.write(i + "<br />");
// }
// document.write("<h1>Reverse Counting:</h1>")

// for (var i = 10; i >= 1; i--) {
//   document.write(i + "<br />");
// }
// document.write("<h1>Even:</h1>")

// for (var i = 0; i <= 20; i+=2) {
//   document.write(i + "<br />");
// }
// document.write("<h1>Odd:</h1>")

// for (var i = 0; i <= 20; i+=2) {
//   document.write(i + "<br />");
// }
// document.write("<h1>Series:</h1>")

// for (var i = 1; i <= 10; i++) {
//   document.write(i * 2 + "k<br />");
// }

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcome to ABC Bakery. What do you want to order.")

// if(A.includes(search)){
//   alert(search + " is available at index " + A.indexOf(search) + " in our Bakery")
// }
// else{
//   alert("We are sorry " + search + " is not available")
// }

// var findLargeNum = [24, 53, 78, 91, 12];
// var largest = findLargeNum[0]

// document.write("Array items:<br />")

// for(var i = 1; i < findLargeNum.length; i++){
//   document.write(findLargeNum[i] + "<br />")
//   if(findLargeNum[i] > largest){
//     largest = findLargeNum[i]
//   }
// }

// document.write("<br />The largest number is " + largest + ".");

var findSmallNum = [24, 53, 78, 91, 12];
var smallest = findSmallNum[0]

document.write("Array items:<br />")

for(var i = 1; i < findSmallNum.length; i++){
  document.write(findSmallNum[i] + "<br />")
  if(findSmallNum[i] < smallest){
    smallest = findSmallNum[i]
  }
}

document.write("<br />The smallest number is " + smallest + ".<br /><br />");

for (var i = 1; i * 5 <= 100; i++) {
  var multiple = i * 5;
  document.write("<br />" + multiple);
}