// 1. At the middle of Start and End do this 👇

// -> Create a function name (getUserDataFromDB) which will take name and callback as parameters
// --> use setTimeout() & print "Getting User Name" & then pass your name as an argument to callback parameter.
// --> this process should take 2s

// -> Create a function name (getUserHobbies) which will take name and callback as parameters
// --> use setTimeout() & print "Getting User hobbies" & then pass your your hobbies array as an argument to callback parameter.
// --> this process should also take 2s

// -> Execute getUserDataFromDB function & pass your name for the first parameter & callback function for the second argument and this callback function should also take a (data) parameter.
// --> In that callback function log (data) to the console
// --> execute getUserHobbies function and pass your data param and also pass another callback function which will take
// ---> hobby as parameter and just log that parameter to the console, run the code and see the result.

// Your code should look something like this 👇
// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });


console.log("start");
function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log("getting Username");
    callback(name);
  }, 2000);
}

function getUserHobbies(arr, callback) {
  setTimeout(() => {
    console.log("Getting Hobbies");
    //Should broke the code if it do change to name the parameter

    arr = ["VideoGames", "Coding", "Read"];
    callback(arr);
  }, 2000);
}


getUserDataFromDB("Fakbo", (data) => {
  console.log(data);
  getUserHobbies(data, (hobbies) => {
    console.log(hobbies);

  });
});

console.log("end");