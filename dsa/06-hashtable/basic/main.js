// Hash table

// Data Structure use to store key-value pairs is build-in in js is an "object"


// Suppose we want to store a phone numbers in hash tables


// john: 55522341
// alex: 561236576
// luci: 342435652

// To solve this problem, we'll be using a "hash functions".


// Hash Function

// Acts like a translator, taking an input of any size (key) and converting it into a fixed-size value (hash code) that can be used as index within the hash table's internal array. this proccess of mapping arbitrary keys to fixed-length indices is called hashing.

// steps

// Input -> You feed any kind of data into the hash function, like your name, a sentence, or a whole file.

// Hashing Process -> the function performs a series of mathematical operations on the input data, essentially scrambling it up in a unique way.

// Fixed-Size Ouput -> Regardless of the input size, the hash function always spits out a fixed-size value, like  a short string of characters or a number.


class HashTable {

    constructor(size = 5) {

        this.keyMap = new Array(size);
    }

    _hashFunction(key) {

        let sum = 0;

        const PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }

        return sum;
    }

    // #1 set method
    //  1.1 take the data and hashed that
}