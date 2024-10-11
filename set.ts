const fruits: string[] = ["banana", "apple", "jackfruit", "apple"]

const newFruits = new Set(fruits)


//built-in methods
newFruits.add("melon")
// newFruits.delete("melon")
// newFruits.clear()

console.log(newFruits.values());
console.log(newFruits.entries());

newFruits.forEach((item) => {
    console.log("buah " + item );
})

console.log(newFruits);

