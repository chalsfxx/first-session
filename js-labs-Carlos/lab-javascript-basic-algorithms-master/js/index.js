// Iteration 1: Names and Input

let hacker1;
let hacker2;

hacker1 = "Berta";
hacker2 = "Alejandro";
console.log("Iteration #1");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals

console.log("Iteration #2 - Condicional Tradicional");
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

let reservedName = "";
for (let i = 0; i < hacker1.length; i++) {
  reservedName += hacker1[i].toUpperCase() + " ";
}
console.log(reservedName);