let studentname =(prompt ("Enter student name:"));
let biology =Number(prompt ("Enter biology marks:"));
let chemistry =Number(prompt ("Enter chemistry marks:"));
let computer =Number(prompt ("Enter computer marks:"));
let physics =Number(prompt ("Enter physics marks:"));

let total = biology+chemistry + computer + physics;
let average =total/4;
let grade;
let result
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "F";
}
if (average >=50){
  result ="pass"
} else {
  result ="fail"
}

             
alert(
       "Student Name: " + studentname + "\n" +
       "Total Marks: " + total + "\n" +
       "Average Marks: " + average + "\n" +
       "Grade: " + grade + "\n" +
       "Result: " + result

)
console.log("Student Name: " + studentname);
console.log("Biology Marks: " + biology);
console.log("Chemistry Marks: " + chemistry);
console.log("Computer Marks: " + computer);
console.log("Physics Marks: " + physics);
console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Grade: " + grade);
console.log("Result: " + result);
