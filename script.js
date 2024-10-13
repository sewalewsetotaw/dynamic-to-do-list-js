document.addEventListener("DOMContentLoaded", (event) => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));  // Add each saved task to the DOM
    }

    // Function to save tasks to localStorage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add task to the DOM
    function addTaskToDOM(taskText) {
        const li = document.createElement('li');  // Create new list item
        li.textContent = taskText;  // Set the text content to task input

        // Create the remove button
        const removebtn = document.createElement('button');
        removebtn.textContent = "Remove";
        removebtn.classList.add('remove-btn');  // Add class using classList.add()

        // Set the onclick event to remove the task
        removebtn.onclick = function () {
            taskList.removeChild(li);  // Remove the current task from DOM
            removeTaskFromLocalStorage(taskText);  // Remove task from localStorage
        };

        // Append the remove button to the list item and list item to the task list
        li.appendChild(removebtn);
        taskList.appendChild(li);
    }

    // Function to remove task from localStorage
    function removeTaskFromLocalStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task !== taskText);  // Remove task
        saveTasks(updatedTasks);  // Save updated tasks array
    }

    // Function to add a task (to both the DOM and localStorage)
    function addTask() {
        const taskText = taskInput.value.trim();  // Trim whitespace from task input
        
        // Check if task input is empty
        if (taskText === "") {
            alert("Please write your task");
        } else {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(taskText);  // Add new task to tasks array
            saveTasks(tasks);  // Save updated tasks array

            addTaskToDOM(taskText);  // Add task to the DOM

            taskInput.value = '';  // Clear the input field after adding the task
        }
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
