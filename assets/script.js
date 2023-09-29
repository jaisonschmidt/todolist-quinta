const tasks = [];
const taskListElement = document.getElementById("taskListElement");
const emptyTaskListElement = document.getElementById("emptyTaskListElement");
const frmTask = document.getElementById('frmTask');

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
    renderTasks();
    return task;
}

function renderTasks(listElement = taskListElement, emptyMessage = emptyTaskListElement) {
    let finalHtml = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = 'block';
        listElement.style.display = 'none';
        return;
    }

    emptyMessage.style.display = 'none';
    listElement.style.display = 'flex';

    tasks.forEach(function(item){
        finalHtml += `
            <details class="taskItem">
                <summary class="taskTitle">${item.taskTitle}</summary>
                ${item.taskDescription}
                <div>
                    <button 
                        class="btn" 
                        onclick="if (confirm('Tem certeza?')) deleteTask(${item.id})"
                    >
                        Pronto
                    </button>
                    <button 
                        class="btn btn-info"
                        onclick="renderFormUpdate(${item.id})"
                    >
                        Alterar
                    </button>
                </div>
            </details>
        `;
    });

    console.log("final html", finalHtml);
   
    listElement.innerHTML = finalHtml;
}

frmTask.addEventListener('submit', function(event) {
    event.preventDefault();
    createTask(frmTask.txtTaskTitle.value, frmTask.txtTaskDescription.value);
    frmTask.reset();
})

renderTasks();
