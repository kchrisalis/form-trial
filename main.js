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
    splitText();
    let ing = ingFunc();
    let step = stepFunc();
    let descrip = descripFunc();

    recipeInfo.push({
        recipeName: document.getElementById("recipeName").value,
        mealType: document.getElementById("mealType").value,
        difficulty: document.getElementById("difficulty").value,
        prepTime: document.getElementById("prepTime").value,
        ingredients: ing,
        steps: step,
        description: descrip
    });
    console.log(recipeInfo);

    localStorage.setItem("recipes", JSON.stringify(recipeInfo))
}


function splitText() {
    ingFunc = function () {
        let ingredients = document.getElementById("ingredients").value;
        let ingredientsArray = ingredients.split("\n");
        return ingredientsArray;
    }

    stepFunc = function () {
        let steps = document.getElementById("steps").value;
        let stepsArray = steps.split("\n");
        return stepsArray;
    }

    descripFunc = function () {
        let description = document.getElementById("description").value;
        let descriptionArray = description.split("\n");
        return descriptionArray;
    }   
}