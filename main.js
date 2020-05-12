/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter_01 = 1;
while (counter_01 <= 20) {
  console.log(counter_01);
  counter_01 += 1;
}
//---------------------------------------
/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

let counter_02 = 2;
while (counter_02 <= 20) {
  console.log(counter_02);
  counter_02 += 2;
}

//--------------------------------------

/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let counter_03 = 1;
while (counter_03 <= 20) {
  console.log(counter_03);
  counter_03 += 2;
}
//---------------------------------------------

/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/



console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let counter_04 = 5
while (counter_04 <= 100) {
  console.log(counter_04)
  counter_04 += 5
}

//----------------------------------------------
/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter_05 = 1;
let result;

while (counter_05 <= 10) {
  result = Math.pow(counter_05, 2);
  console.log(result);
  counter_05 +=1;
}

//----------------------------------------------

/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter_06 = 20;
while (counter_06 >= 1) {
  console.log(counter_06);
  counter_06 -= 1;
}

//---------------------------------------------

/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter7_ = 20;
while (counter7_ >= 1) {
  console.log(counter7_);
  counter7_ -= 2;
}

//---------------------------------------------

/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter8 = 19;
while (counter8 >= 1) {
  console.log(counter8);
  counter8 -= 2;
}

//---------------------------------------------


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter09 = 100
while (counter09 > 0) {
  console.log(counter09)
  counter09 -= 5
}

//---------------------------------------------


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter10 = 10;
let result01;

while (counter10 > 0) {
  result01 = Math.pow(counter10, 2);
  console.log(result01);
  counter10 -= 1;
}

//---------------------------------------------
