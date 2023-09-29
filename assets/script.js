const tasks = [];

function newId() {
    // Gerar IDs entre 0 e 999
    return Math.floor(Math.random() * 1000); 
}

function createTask(taskTitle, taskDescription = "") {
    let id = newId();
    
    let task = {
        id,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
    }

    tasks.push(task);
    // renderTasks();
    return task;
}


