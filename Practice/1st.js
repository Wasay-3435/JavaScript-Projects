// console.log("Hello i am going to learn javascript");
// console.log("my name is syedwasayalishah");
// name="syedwasayalishah";
// console.log(name);
// y = undefined;
// console.log(y);
// x = null;
// console.log(x);
// radius = 5;
// pi = 3.14;
// console.log(pi*Math.pow(radius,2));

// // Objects in JavaScript
// const student={
//     name: "syedwasayalishah",
//     age: 20,
//     isStudent: true
// };
// // Accessing object properties
// console.log(student.name);
// console.log(student.age);
// //2nd way to access object properties
// console.log(student["isStudent"]);
// student["age"] = student["age"] + 1;
// console.log(student.age);

// let num = prompt("enter any number");
// if(num%5===0){
//     console.log("the number is divisible by 5");
// }
// else{
//     console.log("the number is not divisible by 5");
// }

// let score = prompt("enter your score");
// let grade;
// if(score>=90 && score<=100){
//     grade = "A";
// }
// else if(score>=80 && score<90){
//     grade = "B";
// }
// else if(score>=70 && score<80){
//     grade = "C";
// }
// else if(score>=60 && score<70){
//     grade = "D";
// }
// else if(score>=0 && score<60){
//     grade = "F";
// }
// else{
//     grade = "Invalid score";
// }
// console.log("Your grade is: " + grade);

// let n = prompt("enter your number");
// let sum = 0;
// for(let i = 1;i<=n;i++){
//     sum +=i;

// }
// console.log("the sum of 1st " + n + " natural numbers is: " + sum);

// let student = {
//     name: "syedwasayalishah",
//     age: 20,
//     isStudent: true
// }
// for (let key in student){
//     console.log("key" + key + "value" + student[key]);

// }

// marksArray = [85, 90, 78, 92, 88];
// let totalMarks = 0;
// let averageMarks;
// for(mark of marksArray){
//     totalMarks = totalMarks + mark;

// }
// averageMarks = totalMarks / marksArray.length;
// console.log(`Average marks of students are: ${averageMarks}`);

// function myFunction(){
//     console.log("Hello i am going to learn javascript");
//     console.log("my name is syedwasayalishah");
// }

// function myCalculator(num1,num2,op){
//     // function parameters are local variables and they are only accessible within the function. They cannot be accessed outside the function.(block scope)
//     let result;
//     if(op === "+"){
//         result = num1 + num2;
//     }
//     else if(op === "-"){
//         result = num1 - num2;
//     }
//     else if(op === "*"){
//         result = num1 * num2;
//     }
//     else if(op === "/"){
//         result = num1 / num2;
//     }
//     else{
//         result = "Invalid operator";
//     }
//     return result;
//     console
// }
// console.log(myCalculator(10,5,"+"));

//arrow function
// const arrowSum =(a,b)=>{
//     return (a+b);
// }

// function countVowels(str){
//     let count = 0;
//     const Vowels = "aeiouAEIOU";
//     for (let char of str){
//         if(Vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// let inputString = prompt("enter your string");
// let vowelCount = countVowels(inputString);
// console.log(`the number of vowels in the string is: ${vowelCount}`);

//  let arr = ["wasay","ali","shah"];
//  arr.forEach((element)=>{
//      console.log(element.toUpperCase());
//  });

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// newBtn.style.backgroundColor = "blue";
// newBtn.style.color = "white";
// document.querySelector("body").prepend(newBtn);

let btn = document.querySelector("#mode");
let currMode = "light";
btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log("button clicked");

  console.log(currMode);
});
