// Variables
const buttons = document.getElementById("add-task");
const inputText = document.getElementById("text");
const taskContainer = document.getElementById("taskcontainer");

buttons.addEventListener('click', function() {
    // Check if the input is empty
    if (inputText.value === "") {
        alert('Please Enter a Task');
        return;
    }

    // Create task div
    let task = document.createElement('div');
    task.classList.add('task');

    // Create list item
    let li = document.createElement('li');
    li.innerText = inputText.value; // Get input value
    task.appendChild(li);

    // Check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // Append task to taskContainer
    taskContainer.appendChild(task);

    // Clear the input field after adding the task
    inputText.value = "";

    // Add event listener for check button
    checkButton.addEventListener('click', function() {
        li.style.textDecoration = "line-through";
    });

    // Add event listener for delete button
    deleteButton.addEventListener('click', function() {
        task.remove();
    });
});