function displayPrompt() {
	let addFruits = prompt("New Fruit");
	
	fruits.push(addFruits);
	document.getElementById("fruitList").innerHTML = fruits.join(" with ");
	fruits.sort()
}

let fruits = [];