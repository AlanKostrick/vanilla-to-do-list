const itemInput = document.querySelector('#item');
const addItemButton = document.querySelector('#addItem');
const itemsList = document.querySelector('.collection-items');
const clearButton = document.querySelector('#clear');

loadEventListeners();

function loadEventListeners() {
  addItemButton.addEventListener('click', addItem);
  clearButton.addEventListener('click', clearItems);
}

function addItem(event) {
  if (itemInput.value === '') {
    alert('please type into the text box!');
  }

  const itemLi = document.createElement('li');
  itemLi.className = 'item';
  itemLi.innerText = itemInput.value;
  itemsList.appendChild(itemLi);

  itemInput.value = '';

  event.preventDefault();
}

//OPTION 2

// addItemButton.addEventListener("click", function(event) {
//   if (itemInput.value === "") {
//     alert("please type into the text box!");
//   }

//   const itemLi = document.createElement("li");
//   itemLi.className = "item";
//   itemLi.innerText = itemInput.value;
//   itemsList.appendChild(itemLi);

//   itemInput.value = "";

//   event.preventDefault();
// });

//OPTION 3

// addItemButton.addEventListener("click", () => {
//   if (itemInput.value === "") {
//     alert("please type into the text box!");
//   }

//   const itemLi = document.createElement("li");
//   itemLi.className = "item";
//   itemLi.innerText = itemInput.value;
//   itemsList.appendChild(itemLi);

//   itemInput.value = "";

//   event.preventDefault();
// });

function clearItems(event) {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
  event.preventDefault();
}
