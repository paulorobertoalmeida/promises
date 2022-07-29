// ES5
function someCallbackFunction() {
    console.log("Hey there, Ironhackers! Let`s go to the terrace");
}
//const timeoutId = setTimeout(someCallbackFunction, 1000);
//const timeoutId = setTimeout(someCallbackFunction, 5000);

//const timeoutId = setTimeout(someCallbackFunction, 5000);

//clearTimeout(timeoutId);

// Unstopping counting
// let counter = 1;
// const callbackFunction = function () {
//   console.log(counter);
//   setTimeout(callbackFunction, 1000);

//   counter += 1;
// };

// let timeoutId = setTimeout(callbackFunction, 1000);

//regular counter
// let counter = 1;
// const callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);

//   counter += 1;

//   counter > 10 ? clearTimeout(timeoutId) : console.log('waiting')
  
// };

// let timeoutId = setTimeout(callbackFunction, 1000);


//Counter with i as a variable

// let i = 0;
// const intervalId = setInterval(function () {
//   console.log(i);

//   i++;

// i > 10 ? clearInterval(intervalId) : console.log('waiting...')
  
// }, 1000);


//Reverse Countdown 

let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log("Pop!");
    clearInterval(intervalId);
  }

  i--;
}, 1000);


