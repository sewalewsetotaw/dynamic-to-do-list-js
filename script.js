document.addEventListener("DOMContentLoaded", (event) => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to add a task to the task list
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim whitespace from task input
        
        // Check if task input is empty
        if (taskText === "") {
            alert("please write your task");
        } else {
            const li = document.createElement('li'); // Create new list item
            li.textContent = taskText; // Set the text content to task input

            // Create the remove button
            const removebtn = document.createElement('button');
            removebtn.textContent = "Remove";
            removebtn.className = 'remove-btn';
        
            // Set the onclick event to remove the task
            removebtn.onclick = function () {
                taskList.removeChild(li); // Remove the current task
            };

            // Append the remove button to the list item and list item to the task list
            li.appendChild(removebtn);
            taskList.appendChild(li);

            taskInput.value = ''; // Clear the input field after adding the task
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
});
