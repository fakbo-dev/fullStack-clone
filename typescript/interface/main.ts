interface Computer {
    name: string;
    ram: number;
    hdd: number;
}


const computerExample: Computer = {
    name: "i9",
    ram: 8,
    hdd: 100,
};


interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string;
}

const movie1: Movie = {
    name: "star wars",
    ratings: 10,
    genra: "sci-fy",
};



interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const substract: MathOperation = (a, b) => a - b;


interface Person {
    name: string;
    lastName: string;
    age: number;
    sayHello(): void;
}

function greet({ name, lastName, age, sayHello }: Person) {

    console.log(`Hello ${name} ${lastName}, I'am ${age}`);
    sayHello();
}


const fakbo: Person = {
    name: "fakbo",
    lastName: "webdev",
    age: 21,
    sayHello() {
        console.log("Hello there")
    },
};


greet(fakbo);


interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
    songName: "Nature",
    singerName: "Image Dragons",
    printSongInfo(songName, singerName) {
        return `song ${songName}, singer: ${singerName}`
    },
}



interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
    genra: string
}

const MovieTwo: MovieGenra = {

    name: "star wars",
    ratings: 9,
    genra: "scri-fy",

    printMovieInfo(name: string, price: number, ratings: number): string | number {

        return `Name:${name}, Price: ${price} Ratings: ${ratings}`;
    },
}

const res = MovieTwo.printMovieInfo("star wars", 9, 19);

console.log(res);


interface Vehicle {

    start(): void;
    stop(): void;
}


class Car implements Vehicle {

    start(): void {
        console.log("car is starting...");
    }

    stop(): void {
        console.log("car is stopping...");
    }
}