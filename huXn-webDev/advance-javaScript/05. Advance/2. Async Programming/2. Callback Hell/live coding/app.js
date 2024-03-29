function callBackHell(callback) {
  setTimeout(() => {
    const data = "Inside (Callbackhell) function";
    console.log(data);
    callback(data);
  }, 2000)
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed first`;
    console.log(`inside (firstFunc) Function`);
    callback(processedData);
  }, 1000)
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed Second`;
    console.log(`inside (SecondFunc) function`);
    callback(processedData);
  }, 1500);
}

//Callback hell


callBackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final Result Of all functions: ${processedData2}`)
    });
  });
});

//callback is not alwaus asynchronous

console.log("start");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((n) => console.log(n));

console.log("end");