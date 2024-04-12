let password: string | number = 20;

type UserInfo2 = {
  first: string;
  last: string;
  age: number;
}

type AccountDetails2 = {
  email: string;
  password: string;
}

const user: UserInfo2 | AccountDetails2 = {
  email: "fakbodev@gmail.com",
  password: "Poggers",
}


const items: (number | string)[] = [1, 4, 5, "Hello"];

console.log(items);