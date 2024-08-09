document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    const addTask = () => {
        const taskText = inputField.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add complete and delete buttons to the task
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        inputField.value = '';
    };

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
