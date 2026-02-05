// ==========================================
// OPGAVE 2: Datatyper i objekter
// ==========================================

// Kopi af person-objektet fra opgave 1, udvidet med booleans, arrays og nestede objekter
let person = {
	firstname: "Ole",
	lastname: "Erling",
	age: 54,
	hometown: "Roskilde",
	married: true,
	hobbies: ["Reptiler", "Frimærker", "Programmering"],
	pet: {
		type: "Klapperslange",
		name: "Holger"
	}
}

// Udskriv array-værdierne med forEach
console.log("=== Hobbies (array-løkke) ===")
person.hobbies.forEach(function(hobby) {
	console.log(hobby)
})

// Udskriv værdierne fra det nestede objekt
console.log("=== Pet (nested objekt) ===")
console.log(person.pet.type)
console.log(person.pet.name)