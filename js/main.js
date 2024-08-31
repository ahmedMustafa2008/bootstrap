var send = document.getElementById("send");
var send1 = document.getElementById("send1");
var msg = document.getElementById("msg");
var close1 = document.getElementById("close");
var msg2 = document.getElementById("msg2");
var msg11 = document.getElementById("msg11");
var msg22 = document.getElementById("msg22");
send1.addEventListener("click", function () {
    msg11.classList.remove("d-none");
});
close1.addEventListener("click", function () {
    msg11.classList.add("d-none");
})
send.addEventListener("click", function () {
    msg.classList.remove("d-none");
});
close1.addEventListener("click", function () {
    msg.classList.add("d-none");
})
send.addEventListener("mouseenter", function () {
    msg2.classList.remove("d-none");
})
send.addEventListener("mouseleave", function () {
    msg2.classList.add("d-none");
})
send1.addEventListener("mouseenter", function () {
    msg22.classList.remove("d-none");
})
send1.addEventListener("mouseleave", function () {
    msg22.classList.add("d-none");
})









// var totalSalary = 0;
// for(var i = 1 ; i <= 10 ; i++){
//     var salary = +(prompt("Enter your salary for month " + i + ":"));
//     totalSalary += salary;
// }
// var averageSalary = totalSalary / 10;
// console.log("Your average salary over the last 10 months is: " + averageSalary);


// var number1 = +(prompt("Enter the first number"));
// var number2 = +(prompt("Enter the second number"));
// var sum = number1 + number2;
// var subtraction = number1 - number2;
// var multiplication = number1 * number2;
// var division = number1 / number2;
// console.log("Sum: " + sum);
// console.log("Subtraction: " + subtraction);
// console.log("Multiplication: " + multiplication);
// console.log("Division: " + division);



// var str = "Web developer";
// if(str.length % 2 == 0){
//     console.log("Its even");
// }else{
//     console.log("Its odd");
// }

// function calculateWeeklySalary(hours) {
//     var totalSalary = 0;
//     for (var i = 0; i < hours.length; i++) {
//         var dailyHours = hours[i];
//         var dailySalary = 0;
//         if (i < 5) {
//             if (dailyHours <= 8) {
//                 dailySalary = dailyHours * 10;
//             } else {
//                 dailySalary = (8 * 10) + ((dailyHours - 8) * 15);
//             }
//         } else {
//             if (dailyHours <= 8) {
//                 dailySalary = dailyHours * 20;
//             } else {
//                 dailySalary = (8 * 20) + ((dailyHours - 8) * 30);
//             }
//         }
//         totalSalary += dailySalary;
//     }
// }


// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function primeNumbers(n) {
//     let primeCount = 0;
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             primeCount++;
//         }
//     }
//     return primeCount;
// }
// console.log(primeNumbers(10));
// console.log(primeNumbers(20));
// console.log(primeNumbers(30)); 
