document.getElementById("test").addEventListener("click", testing);

let recipeInfo = [{
    recipeName: "recipeName",
    mealType: "mealType",
    difficulty: "difficulty",
    prepTime: "prepTime",
    ingredients: ["i1", "i2", "i3"],
    steps: ["s1", "s2", "s3"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
}];

function testing() {
    document.getElementById('testDiv').append(recipePreview(recipeInfo[0]));
}

function recipePreview(aRecipe) {
    let rcDiv = document.createElement('div');
    rcDiv.classList.add("recipeCard");

    let h2El= document.createElement('h2');
    h2El.innerHTML = aRecipe.recipeName;
    rcDiv.append(h2El);

    let infoDiv = document.createElement('div');
    infoDiv.innerHTML = `
    <p><strong>Meal Type: </strong>${aRecipe.mealType}</p>
    <p><strong>Difficulty: </strong>${aRecipe.difficulty}</p>
    <p class="pOverflow"><strong>Description: </strong>${aRecipe.description}</p>`
    rcDiv.append(infoDiv);

    return rcDiv;
}