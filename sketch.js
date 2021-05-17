// ToDO LIST 

const lesPlats = [
{
	"name" : "je suis une plat 1",
	"ingredients" : ["ingredients1", "ingredients2", "ingredients3"],
},
{

	"name" : "je suis une plat 2",
	"ingredients" : ["ingredients9", "ingredients2", "ingredients3"],
},
{

	"name" : "je suis une plat 3",
	"ingredients" : ["ingredients1", "ingredients2", "ingredients3"],
},
{

	"name" : "je suis une plat 4",
	"ingredients" : ["ingredients4", "ingredients6", "ingredients3"],
},
{

	"name" : "je suis une plat 5",
	"ingredients" : ["ingredients4", "ingredients8", "ingredients2"],
},
{

	"name" : "je suis une plat 6",
	"ingredients" : ["ingredients7", "ingredients8", "ingredients1"],
},
{

	"name" : "je suis une plat 7",
	"ingredients" : ["ingredients1", "ingredients6", "ingredients7"],
},
{

	"name" : "je suis une plat 8",
	"ingredients" : ["ingredients8", "ingredients4", "ingredients5"],
},
{

	"name" : "je suis une plat 9",
	"ingredients" : ["ingredients6", "ingredients2", "ingredients7"],
}
]; 

	//choix nbr de plats

	let nbrdeplatElement = document.getElementById("nbrPlat");

	nbrdeplatElement.value = 1;
	nbrdeplatElement.setAttribute("max", lesPlats.length);
	nbrdeplatElement.addEventListener("change", function(){

		let ingredientsElement = document.getElementById("ingredients");
		let platsElement = document.getElementById("plats");

		ingredientsElement.innerHTML = "";
		platsElement.innerHTML = "";
		let data = lesPlats.slice(0);
		console.log(data)
		let nbrdeplat = this.value;
		let resultPlats = [];

		for (let i = 0; i < nbrdeplat; i++) {

			let random = Math.floor(Math.random() * data.length); 

			let plat = data[random];
			resultPlats.push(plat);
			data.splice(random, 1);
		}

		let listIngredient = [];
		let listPlat = [];

		for(const resultPlat of resultPlats){
			listIngredient.push(resultPlat["ingredients"])
			listPlat.push(resultPlat["name"])
		}
		let arr = [];
		listIngredient = [].concat(...listIngredient);
		listIngredient.sort((a, b) => a.localeCompare(b))


		for(const plat of listPlat){
			let li = document.createElement('li');
			let textNode = document.createTextNode(plat);
			li.appendChild(textNode)
			platsElement.appendChild(li)
		}

		for(const ingredient of listIngredient){
			let li = document.createElement('li');
			let textNode = document.createTextNode(ingredient);
			li.appendChild(textNode)
			ingredientsElement.appendChild(li);
		
		}

	});
	

	//liste de tout les ingredients

