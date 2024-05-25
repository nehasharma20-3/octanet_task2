// script.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            taskInput.value = '';
        }
    });
});
