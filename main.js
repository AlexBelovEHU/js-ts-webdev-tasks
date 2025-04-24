const categories = [
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear",
    "Gift sets",
]

let categoriesElements;
function addCategory(category) {
    const categoriesContainer = document.getElementById("categories-nav")
    const categoryElement = document.createElement("button");
    categoryElement.classList.add("category");
    categoryElement.textContent = category;
    categoriesContainer.appendChild(categoryElement);
}
function addCategories(categories) {
    categories.forEach((category) => {
        addCategory(category);
    });
}
function addEventListenerToCategory(category) {
    category.addEventListener("click", function () {
        console.log("Category clicked:", category.textContent);
        category.classList.add("selected");

        categoriesElements.forEach((otherCategory) => {
            if (otherCategory !== category) {
                otherCategory.classList.remove("selected");
            }
        });
    });
}



function addEventListenerToCategories() {
    categoriesElements = document.querySelectorAll(".category");
    console.log("Categories:", categoriesElements);
    categoriesElements.forEach((category) => {
        addEventListenerToCategory(category);
    });
}

addCategories(categories);
addEventListenerToCategories();