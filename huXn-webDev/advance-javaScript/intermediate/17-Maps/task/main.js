// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);


console.log(map);
console.log(map.get("a"));
console.log(map.size);
console.log(map.delete("b"));
console.log(map.size);
