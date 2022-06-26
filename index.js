"use strict";
document.addEventListener("DOMContentLoaded", () => {
})

const cocktail = document.getElementById('get_cocktail');
const cocktail_container = document.getElementById('cocktail');
cocktail.addEventListener('click', () => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createCocktail(res.drinks[0]);
	});
});

const createCocktail = (cocktail) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(cocktail[`strIngredient${i}`]) {
			ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `
		<div id="rowa" id="cocktail-dataa">
			<div id="five">
				<img src="${cocktail.strDrinkThumb}" >
            </div>
            <div id="seven">
               <h4>${cocktail.strDrink}</h4><span><div class="likes-section">
			   <button id="like-button" class="like"><span id="like-count" class="likeNum">0 likes</span>♥</button>
			 </div></span>
				<p><strong>Category:</strong> ${cocktail.strCategory}</p>
				<p><strong>Glass type:</strong> ${cocktail.strGlass}</p>
				<p><strong>Type:</strong> ${cocktail.strAlcoholic}</p>
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
                <h5>Instructions:</h5>
				<p>${cocktail.strInstructions}</p>
				
			</div>
		</div>
	`;
	
cocktail_container.innerHTML = newInnerHTML;
}
const getLike=document.querySelector(".like");
const getLikeCount = document.querySelector(".likeNum");
let like = 0;
let increaseLike;
let likeClick;

increaseLike = () => {
	  like++;
    getLikeCount.innerHTML = `${like}`

}
likeClick	= () => {
	increaseLike();
}
getLike.addEventListener("click", likeClick);
like.target.style.backgroundColor = "red";