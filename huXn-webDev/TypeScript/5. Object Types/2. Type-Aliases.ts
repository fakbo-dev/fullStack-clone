type User = {
  name: string;
  age: number;
  location: string;
}

const printUserInfo = (whatever: User) => {
  return `Name: (${whatever.name}) Age: (${whatever.age}) location: (${whatever.location})`
};

const res2 = printUserInfo({ name: "Fakbo", age: 21, location: "Venezuela" });

console.log(res2);