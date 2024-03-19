// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//lowerCase
let personName: string="Imran";
console.log("lowercase:", personName.toLowerCase());

//UpperCase
console.log("Uppercase:", personName.toUpperCase());

//TitleCase
console.log("titlecase:", personName.replace(/\bw/g,c =>c.toUpperCase()));

