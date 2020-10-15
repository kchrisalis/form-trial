document.getElementById("test").addEventListener("click", testing);

let recipeInfo = [{
    recipeName: "recipeName",
    mealType: "mealType",
    difficulty: "difficulty",
    prepTime: "prepTime",
    ingredients: ["i1", "i2", "i3"],
    steps: ["s1", "s2", "s3"],
    description: "description"
}];

function testing() {
document.getElementById('testDiv').append(MainRecipe(recipeInfo[0]));
}

function MainRecipe(aRecipe) {
    let mrDiv = document.createElement('div');
    let elsR = {
        div: document.createElement('div'),
        title: document.createElement('h1'),
        h2: document.createElement('h2'),
        h3: document.createElement('h3'),
        p: document.createElement('p'),
        button: document.createElement('button'),
        ol: document.createElement('ol'),
        ul: document.createElement('ul')
    }

    // Main Recipe Container
    mrDiv.classList.add("mainRecipe");

    // Recipe Name
    elsR.title.innerHTML = `${aRecipe.recipeName}`;
    elsR.title.classList.add("recipeName");
    mrDiv.append(elsR.title);

    // Quick Description 
    elsR.p.innerHTML = `${aRecipe.description}`;
    mrDiv.append(elsR.p);

    // Main Recipe Sub Box
    elsR.div.classList.add("subRecipeMenu");
    elsR.p.classList.add("subP");
    elsR.h3.classList.add("subH3");

    elsR.h3.innerHTML = "Meal Type:";
    elsR.div.append(elsR.p.innerHTML = `${aRecipe.mealType}`);
    elsR.h3.innerHTML = "Difficulty:";
    elsR.div.append(elsR.p.innerHTML = `${aRecipe.difficulty}`);
    elsR.h3.innerHTML = "Prep Time:";
    elsR.div.append(elsR.p.innerHTML = `${aRecipe.prepTime}`);
    elsR.div.append(elsR.button.innerHTML = "Favourite This Recipe");
    mrDiv.append(elsR.div);

    // Ingredients (unordered)
    elsR.h2.classList.add("MainRecipeH2");
    mrDiv.append(elsR.h2.innerHTML = "Ingredients");
    for (let i = 0; i < aRecipe.ingredients.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${aRecipe.ingredients[i]}`;
        elsR.ol.append();
    }
    mrDiv.append(elsR.ol);

    // Instructions (ordered)
    mrDiv.append(elsR.h2.innerHTML = "Instructions");
    for (let i = 0; i < aRecipe.steps.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${aRecipe.steps[i]}`;
        elsR.ul.append();
    }
    mrDiv.append(elsR.ul);

    return mrDiv;
}