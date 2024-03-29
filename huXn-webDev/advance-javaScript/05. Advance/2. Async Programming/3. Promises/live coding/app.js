function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number`)
    } else {
      reject(`${number} is an odd number`);
    }
  });
};


const numberToCheck = 7; //odd

checkNumber(numberToCheck).then((message) => {
  console.log(`Success: ${message}`);
}).catch(error => {
  console.log(`Error: ${error}`);
});



function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (Callback Hell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
};

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processesdData = `${data} - Processed data`;
      console.log("Inside (firstFunc) function");
      resolve(processesdData)
    }, 2000);
  })
}


function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processesdData = `${data} - processed data`;
      console.log("inside (secondFunc) function");
      resolve(processesdData);
    }, 1500);
  })
}

fetchData()
  .then(data => firstFunc(data))
  .then((processesdData1) => secondFunc(processesdData1))
  .then(processesdData2 => console.log(`final result of all function With Promesis: ${processesdData2}`))
  .catch(error => console.log(`Error: ${error}`));