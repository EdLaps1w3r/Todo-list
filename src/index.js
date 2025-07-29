var listCount = 0;
var taskCount = 0;
var taskID = 0;
var tasks = [];

document.getElementById('submit').onclick = function() {
    var tasks = [];
    for (let i = 1; i <= taskCount; i++) {
        var num = taskID + i - taskCount;
        var eleId = 'task' + num;
        console.log(eleId);
        var task = document.getElementById(String(eleId)).value;
        tasks.push(task);
        if (i !== 1) {
            const taskInput = document.getElementById(String(eleId));
            const taskLabel = document.getElementById('label' + num);
            taskLabel.remove();
            taskInput.remove();
        };
    };
    var listName = document.getElementById('title').value;

    const newList = createListObj(listName, tasks);
    createListDOM(newList);
    closeForm();
};

function closeForm() {
    var form = document.getElementById('newListForm');
    form.style.display = "none";

    var body = document.getElementById('body')
    body.style.display = 'inline';
};

document.getElementById('createListButton').onclick = function() {
    taskID = taskID + 1;
    var taskIDTemp = taskID - taskCount;
    var firstTaskInput = document.getElementById('task' + taskIDTemp);
    firstTaskInput.id = 'task' + taskID;

    var form = document.getElementById('newListForm');
    form.style.display = "block";
    taskCount = 1;

    var body = document.getElementById('body')
    body.style.display = 'none';
};

document.getElementById('close').onclick = function() {
    var form = document.getElementById('newListForm');
    form.style.display = "none";

    var body = document.getElementById('body')
    body.style.display = 'inline';
};

document.getElementById('newFormTask').onclick = function() {
    taskCount = taskCount + 1;
    taskID = taskID + 1;
    var taskContainer = document.getElementById('taskContainer');
    var newTask = document.createElement('div');
    var id = 'task' + taskID;

    var label = document.createElement('label');
    label.for = id;
    label.id = 'label' + taskID;
    label.innerHTML = 'New Task';
    newTask.appendChild(label);

    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter New task';
    input.name = id;
    input.id = id;
    console.log(input.id);
    newTask.appendChild(input);
    taskContainer.appendChild(newTask);
};

function createListObj(name, tasks) {
    const id = listCount;
    listCount = listCount++;
    return { name, tasks, id };
};

function createListDOM(listObj) {
    var container = document.getElementById("listContainer");
    var list = container.appendChild(document.createElement('div'));
    list.id = listObj.id;

    var title = list.appendChild(document.createElement('h1'));
    var tasks = list.appendChild(document.createElement('ul'));

    title.innerHTML = listObj.name;

    for (const element of listObj.tasks) {
        var task = document.createElement('li');
        task.innerHTML = element;
        task.className = 'task';
        tasks.appendChild(task);
    };

    var addTask = tasks.appendChild(document.createElement('li'))
    var addInput = addTask.appendChild(document.createElement('input'));
    addInput.type = "text";
    addInput.placeholder = "Add another Task";

    tasks.addEventListener("click", (e) => {
        switch (e.target.className) {
            case "task":
                e.target.remove();
                break;
            default:
                break;
        };
    });

    addInput.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            var task = document.createElement('li')
            task.innerHTML = e.currentTarget.value;
            e.currentTarget.before(task);
            taskID = taskID + 1;
            e.currentTarget.value = '';
        };
    });
};

