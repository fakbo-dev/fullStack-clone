type User2 = {
  name: string;
  age?: number;
  //readonly propertie can't be modify it
  readonly location: string;
}


const user: User2 = {
  name: "Fakbo",
  location: "Venezuela",
};

console.log(`Name: ${user.name}, location: ${user.location}`);

