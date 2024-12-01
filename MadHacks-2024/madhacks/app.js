let tasks = [];
// let tasks = person.getTasks()
function updateTasks() {
    //alert("update called")
    const taskPublicNode = document.getElementById("tasks-public");
   // const tasksPublic = tasks.join("<br/>")
   const tasksPublic = tasks.map(task => {
    return `--------<br/>Title: ${task.title}<br/>Description: ${task.description}<br/>Category: ${task.category}<br/>--------<br/>`;
}).join("");
    //alert("hi")
    taskPublicNode.innerHTML = tasksPublic;
    //alert("update ran")
}

function addTask(){
    resetTask();
    const taskTitle = document.getElementById("new-task-title").value;
    const taskDescription = document.getElementById("new-task-description").value;
    const taskCategory = document.getElementById("new-task-category").value;
    if(taskTitle == ""){
        document.getElementById("title-error-text").innerText = "Please enter a task title!";
        //return;
        if(taskDescription == ""){
            document.getElementById("description-error-text").innerText = "Please enter a task desciption!";
            return;
        }
    }

    else if(taskDescription == ""){
        document.getElementById("description-error-text").innerText = "Please enter a task desciption!";
        return;
    }
    //add to list
    // tasks.push(taskTitle);
    // tasks.push(taskDescription);
    // tasks.push(taskCategory);

    tasks.push({
        title: taskTitle,
        description: taskDescription,
        category: taskCategory,
        isCompleted: false
    })
    updateTasks();

    
   // alert("pushed")
     // this is the table thing (public tasks)
    // document.getElementById("task-title").innerHTML = taskTitle;
    // document.getElementById("task-description").innerHTML = taskDescription;

    // const taskDiv = document.createElement("div");
    // taskDiv.className = "task-item";


    // const titleElement = document.createElement("h4");
    // titleElement.textContent = taskTitle;

    // const descriptionElement = document.createElement("p");
    // descriptionElement.textContent = taskDescription;

    // const categoryElement = document.createElement("p");
    // categoryElement.textContent = `Category: ${taskCategory}`;

    // taskDiv.appendChild(titleElement);
    // taskDiv.appendChild(descriptionElement);
    // taskDiv.appendChild(categoryElement);

    // document.getElementById("task-list-container").appendChild(taskDiv);

    // document.getElementById("new-task-title").value = "";
    // document.getElementById("new-task-description").value = "";
    // document.getElementById("new-task-category").selectedIndex = 0;
}

function resetTask() {
    document.getElementById("title-error-text").innerText = "";
    document.getElementById("description-error-text").innerText = "";
    document.getElementById("category-error-text").innerText = "";

}