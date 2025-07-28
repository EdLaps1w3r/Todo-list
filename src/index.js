var listCount = 0;
var taskCount = 0;


document.getElementById('submit').onclick = function() {
    const tasks = [];
    for (let i = 1; i < taskCount; i++) {
        var eleId = 'task' + i;
        var task = document.getElementById(eleId).value;
        tasks.push(task);
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
    taskCount = taskCount++;
    var taskContainer = document.getElementById('taskContainer');
    var newTask = document.createElement('div');
    var id = 'task' + taskCount;

    var label = document.createElement('label');
    label.for = id;
    label.innerHTML = 'New Task';
    newTask.appendChild(label);

    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter name of new list';
    input.name = id;
    input.name = id;
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
        tasks.appendChild(task);
    };

    
};