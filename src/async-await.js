// Async arrow function syntax
// const myFunc = async () => {};


// async function someFunction() {
//     return true;
//   }

//   someFunction().then((value) => console.log(value)); // true


// const directions = [
//     "Starting point: Ironhack Paris",
//     "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//     "← Turn left onto Rue Chanzy",
//     "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(step) {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         console.log(directions[step]);

//         if (!directions[step]) reject("Instructions not found.");
//         else resolve();
//          }, 2000);
//     });
// }

// async function getCoffee() {
//     await obtainDirections(0);
//     await obtainDirections(1);
//     await obtainDirections(2);
//     await obtainDirections(3);
//     console.log("You arrived at your destination!");
// }

// getCoffee();



//Handling error with catch()

// const directions = [
//     "Starting point: Ironhack Paris",
//     "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//     "← Turn left onto Rue Chanzy",
//     "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(step) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         console.log(directions[step]);

//         if (!directions[step]) reject("Instructions not found.");
//         else resolve();
//         // }, 2000);
//     });
// }

// async function getCoffee() {
//     try {
//         await obtainDirections(0);
//         await obtainDirections(1);
//         await obtainDirections(2);
//         await obtainDirections(3);

//         console.log("You arrived at your destination!");
//     } catch (err) {
//         console.log(err);
//     }
// }

// getCoffee();

// trowing an error
// const directions = [
//     "Starting point: Ironhack Paris",
//     "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//     "← Turn left onto Rue Chanzy",
//     "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(step) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         console.log(directions[step]);

//         if (!directions[step]) reject("Instructions not found.");
//         else resolve();
//         // }, 2000);
//     });
// }

// async function getCoffee() {
//     try {
//         await obtainDirections(0);
//         await obtainDirections(1);
//         await obtainDirections(2);
//         await obtainDirections(3);

//         // This will result in a rejected Promise as direction step 4 doesn't exist:
//         await obtainDirections(4);

//         console.log("You arrived at your destination!");
//     } catch (error) {
//         console.log("Something went wrong: ", error);
//     }
// }

// getCoffee();


//Fetching Data from Space X

const URL = "https://api.spacexdata.com/v4/launches";

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonResponse) => {
//     console.log("Parsed response: ", jsonResponse);
//   })
//   .catch((err) => console.log("Something went wrong!", error));

//Using Async Await
// async function displayMissionPatches() {
//     try {
//       const response = await fetch(URL);
//       const jsonResponse = await response.json();
  
//       console.log("Parsed response: ", jsonResponse);
//     } catch (err) {
//       // Handle error or a rejected Promise
//       console.log("Something went wrong!", error);
//     }
//   }
  
//   displayMissionPatches();
  