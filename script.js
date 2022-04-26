const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');


function searchMeal(e){
    e.preventDefault();
    //Clear single meal
    single_mealEl.innerHTML = '';

}

//Event Listeners
submit.addEventListener('submit', searchMeal);