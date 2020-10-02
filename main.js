// TITLE


// document.addEventListener("keydown", form);

// function form() {
//     if (event.code == 'Enter') {

//     }
// // console.log(event.code);
// }

let recipeInfo = [];

document.getElementById("submitBtn").addEventListener("click", submitForm);

function submitForm() {
    let ing = ingredients ();
    recipeInfo.push({
        recipeName: document.getElementById("recipeName").value,
        mealType: document.getElementById("mealType").value,
        difficulty: document.getElementById("difficulty").value,
        prepTime: document.getElementById("prepTime").value,
        ingredients: ing,
        steps: document.getElementById("steps").value,
        description: document.getElementById("description").value
    });
    console.log(recipeInfo);
}

function ingredients() {
    let ingredients = document.getElementById("prepTime").value;
    let ingredientsArray = ingredients.split("\n");
    return ingredientsArray;xs
}
