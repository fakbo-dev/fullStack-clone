// --------------------------------------------------
// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Football", "Singing", "Solving Math"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("HuXn")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// --------------------------------------------------

// Refactoring
console.log("start");
function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      console.log(name);
      resolve(name);
    }, 2000);
  })
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get Hobbies...")
      resolve(["Coding", "VideoGames", "Read"]);
    }, 2000);
  })
}

async function showUserHobbies() {
  try {
    const name = await getUserDataFromDB("fakbo");
    const hobbies = await getUserHobbies(name);
    console.log(hobbies);
  } catch (error) {
    console.error(error);
  }
}


showUserHobbies();
console.log("end")