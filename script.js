const dateSpan = document.getElementById('date');
const today = new Date();
dateSpan.textContent = today.toLocaleDateString();

function addTask(listId) {
  const ul = document.getElementById(listId);
  const newLi = document.createElement('li');
  const newCheckbox = document.createElement('input');
  newCheckbox.type = 'checkbox';
  const newTaskInput = document.createElement('input');
  newTaskInput.type = 'text';
  newTaskInput.placeholder = "Enter your task"; 
  const newDueDateInput = document.createElement('input');
  newDueDateInput.type = 'date';
  newLi.appendChild(newCheckbox);
  newLi.appendChild(newTaskInput);
  newLi.appendChild(newDueDateInput);
  ul.appendChild(newLi);
}


