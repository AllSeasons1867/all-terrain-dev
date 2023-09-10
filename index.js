const deleteButtons = document.querySelectorAll('.delete-button');
const addItemButton = document.querySelector('#addItemButton');

deleteButtons.forEach(button => {
  button.addEventListener('click', function() {
    const itemId = this.parentElement.getAttribute('data-item-id');
    const itemToDelete = document.querySelector(`[data-item-id="${itemId}"]`);
    
    if (itemToDelete) {
      itemToDelete.remove();
    }
  });
});

addItemButton.addEventListener('click', () => {
    const toDoList = document.querySelector('.todo-list');
    const toDoInput = document.querySelector('#toDoInput').value;


    console.log(toDoInput);
    toDoList.innerHTML += `<li>${toDoInput}</li>`;
})