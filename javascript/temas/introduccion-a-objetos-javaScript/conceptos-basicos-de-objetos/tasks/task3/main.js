function cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
    }
    const cat1 = new cat('Bertie', 'Cymric');
    const cat2 = new cat('Elfie', 'Aphrodite Giant');
    
    cat1.greeting();
    cat2.greeting();