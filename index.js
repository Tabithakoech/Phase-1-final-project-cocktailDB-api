// const fetchCocktails= async()=>{
//     const response = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=')
//     const data = await response.json()
//     console.log (data);
//     const results= data.results
//     // return data
// }
// fetchCocktails()

// console.log ('hello')

// const fetchPeople = async () => {
//     const response = await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=");
//     const data = await response.json();
//     console.log(data);
//     const results = data.results;

//     results.map((person) => renderPerson(person));
//     console.log(results);
//   };

//   fetchPeople();
// document.addEventListener("DOMContentLoaded", function () {
//     const search = document.querySelector("#search");
// });
// let drinkSearch=document.getElementById("search");
// drinkSearch.addEventListener("keyup", () )
//     input.addEventListener('change',()=>{
//         filter=input.value
//         return filter
//      } )





//   let url2 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${filter}";
//   fetch(url2)
//       .then((response) =>(response.json()))
//       .then((data) => {
//           console.log(data);
          
//   Document.addEventListener("DOMContentLoaded", function () {
//     const ourSearch = document.getElementById("search-input");
//     ourSearch.addEventListener("keyup", () => {
//         let filter = ourSearch.value;
//         let html = "";
//         data.drinks.map((value) => {
//             if (value.strDrink.toLowerCase().includes(filter.toLowerCase())) {
//                 html += `
//                 <div class="col-md-4">
//                     <div class="card" style="width:350px">
//                         <img class="card-img-top" src="${value.strDrinkThumb}" alt="Card image" style="width:100%">
//                         <div class="card-body">
//                           <h4 class="card-title">${value.strDrink}</h4>
//                           <p class="card-text">Instructions</p>
//                           <p class="card-text">${value.strInstructions}</p>
//                           <a href="#" class="btn btn-primary">${value.strGlass}</a>
//                         </div>
//                     </div>

//                 </div>

//                 `
//             }
//             document.getElementById("content").innerHTML = html;
//         });
//     });
// } );




// const searchBtn = document.getElementById('search-btn');
// const cocktailList = document.getElementById('cocktail');

// searchBtn.addEventListener('click', cocktailList);






// get meal list that matches with the ingredients
// function getCocktailList() {
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchInputTxt}')
//         .then(response => response.json())
//         .then(data => {
//             console.log (data);
//             let html = "";
//             data.drinks.map((value) => {
//                 html += `
//                 <div class="col-md-4">
//                   <div class="card" style="width:350px">
//                     <img class="card-img-top" src="${value.strDrinkThumb}" alt="Card image" style="width:100%">
//                     <div class="card-body">
//                       <h4 class="card-title">${value.strDrink}</h4>
//                       <p class="card-text">Instructions</p>
//                       <p class="card-text">${value.strInstructions}</p>
//                       <a href="#" class="btn btn-primary">${value.strGlass}</a>
//                     </div>
//                    </div>

//                 </div>
//                 `;
//             });
//         })
//           document.getElementById("cocktail").innerHTML = html;

//       // cocktailList.innerHTML = html;
//     }
//     document.addEventListener("DOMContentLoaded", function () {
//       const search = document.querySelector("#search");
//   });
//   let drinkSearch=document.getElementById("search");
//   drinkSearch.addEventListener("keyup", () => {
//       searchInputTxt.addEventListener('change',()=>{
//           filter=searchInputTxt.value
//           return filter
//        } )
//       })







// let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// fetch(url)
//     .then((response) =>(response.json()))
//     .then((data) => {
//         console.log(data);
//         let html = "";
//         data.drinks.map((value) => {
//             html +=`
// <div class="col-md-4">
//     <div class="card" style="width:350px">
//         <img class="card-img-top" src="${value.strDrinkThumb}" alt="Card image" style="width:100%">
//         <div class="card-body">
//           <h4 class="card-title">${value.strDrink}</h4>
//           <p class="card-text">Instructions</p>
//           <p class="card-text">${value.strInstructions}</p>
//           <a href="#" class="btn btn-primary">${value.strGlass}</a>
//         </div>
//     </div>

// </div>
//             `
//         document.getElementById("content").innerHTML = html;
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     } )



"use strict";

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
               <h4>${cocktail.strDrink}</h4>
				<p><strong>Category:</strong> ${cocktail.strCategory}</p>
				<p><strong>Glass type:</strong> ${cocktail.strGlass}</p>
				<p><strong>Type:</strong> ${cocktail.strAlcoholic}</p>
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
                <h5>Instructions:</h5>
				<p>${cocktail.strInstructions}</p>
				<div class="likes-section">
                  <button id="like-button" class="like"><span id="like-count" class="likeNum">0 likes</span>♥</button>
                </div>
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
    getLikeCount.innerHTML = `${'like'}`

}
likeClick	= () => {
	increaseLike();
}
getLike.addEventListener("click", likeClick);