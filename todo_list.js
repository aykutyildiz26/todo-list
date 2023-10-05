function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
    taskText = taskText.charAt(0).toUpperCase() + taskText.slice(1)
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;

    newTask.onclick = function () {
        this.classList.toggle("completed");
    };

    taskList.appendChild(newTask);
    taskInput.value = "";
}

var taskInput = document.getElementById("task");

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});