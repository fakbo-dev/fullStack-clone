type UserInfo = {
  first: string;
  last: string;
  age: number;
}

type AccountDetails = {
  email: string;
  password: string;
}

type User5 = UserInfo & AccountDetails;

const fakbo: User5 = {
  first: "Fakbo",
  last: "WebDev",
  age: 21,
  email: "fakbodev@gmail.com",
  password: "Poggers",
}

console.log(`Name: ${fakbo.first} ${fakbo.last}, Age: ${fakbo.age}, Email: ${fakbo.email}, Password: ${fakbo.password}`);