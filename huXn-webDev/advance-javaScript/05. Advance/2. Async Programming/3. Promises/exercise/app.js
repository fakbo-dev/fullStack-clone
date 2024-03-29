// ----------------------------------------------
// Refactor this code to use Promises
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Name...");
//     callback(name);
//   }, 2000);
// }

// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting user hobbies...");
//     callback(["Cricket", "Reading", "Dancing"]);
//   }, 2000);
// }

// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

// console.log("End");
// ----------------------------------------------

console.log("start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Username...");
      console.log(name);
      resolve(name);
    }, 2000);
  });
};

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Hobbies...");
      resolve(["VideoGames", "Coding", "Read"]);
    }, 3000);
  })
}

getUserDataFromDB("fakbo")
  .then(hobbies => getUserHobbies(hobbies))
  .then(arr => console.log(`Hobbies: ${arr}`));

console.log("End");