const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
  button.addEventListener('click', function() {
    const itemId = this.parentElement.getAttribute('data-item-id');
    const itemToDelete = document.querySelector(`[data-item-id="${itemId}"]`);
    
    if (itemToDelete) {
      itemToDelete.remove();
    }
  });
});
