let toDoList = document.querySelector('.todo-list');
let addItemButton = document.querySelector('#addItemButton');


toDoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    let itemToDelete = event.target.parentElement;
    if (itemToDelete) {
      itemToDelete.remove();
    }
  }
});

addItemButton.addEventListener('click', () => {
  let toDoInput = document.querySelector('#toDoInput').value;
  toDoList.innerHTML += `<li>${toDoInput} <button class="delete-button">Done</button></li>`;
});
