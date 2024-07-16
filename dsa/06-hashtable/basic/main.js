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
    constructor(size = 6) {
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

    set(key, value) {
        const index = this._hashFunction(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        return this;
    }

    get(key) {
        const index = this._hashFunction(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    getAllValues() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

const phoneBook = new HashTable("john", "555-333-222");
phoneBook.set("john", "555-333-444");
phoneBook.set("jordan", "222-444-666");
phoneBook.set("michel", "111-666-222");
console.log(phoneBook.get("jordan"));
console.log(phoneBook.getAllValues());
console.log(phoneBook.getAllKeys());
phoneBook.set();
