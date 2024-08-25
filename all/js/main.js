let tasksInput = document.getElementById("tasks");
let tableTask = document.getElementById("tableBody");

let arrayTasks = [];
let mode = -1;

objectCont = {
  task: tasksInput.value,
};

// this function add tasks

function addTasks() {
  if (tasksInput.value != "") {
    objectCont = {
      task: tasksInput.value,
    };
    focusInput();

    if (mode > -1) {
      arrayTasks[mode] = objectCont;
      mode = -1;
    } else {
      arrayTasks.push(objectCont);
    }
    display();
    clear();
  }
}

// this function print the text in html
function display() {
  let tableTasks = "";
  for (let i = 0; i < arrayTasks.length; i++) {
    tableTasks += `
                   <div class="col-lg-12 list_task_add mt-5 d-flex justify-content-between">
                    <span> <span class="btn btn-danger btn_tasks_conter"> Task - ${
                      i + 1
                    } : </span>
                        <span class="content_task" onclick="istrueTask()"> ${
                          arrayTasks[i].task
                        } </span>
                    </span>


                    <div class="d-flex justify-content-center align-items-center">
                                    <button class="btn_check"><input type="checkbox"></button>

                        <button class="edit" onclick="edit(${i})"> <i class="fa-solid fa-pen-to-square "></i> </button>
                        <button class="delet" onclick="deletOneTasks(${i})"> <i class="fa-solid fa-trash "></i> </button>
                    </div>
                </div>
    `;
  }
  tableTask.innerHTML = tableTasks;
}

// this function delet on tasks
function deletOneTasks(i) {
  arrayTasks.splice(i, 1);
  display();
}

// this function delete all tasks
function deleteAll() {
  arrayTasks.splice(0);
  display();
}

// this function clear input value
function clear() {
  tasksInput.value = "";
}

// this function edit in value
function edit(i) {
  tasksInput.value = arrayTasks[i].task;
  mode = i;
}

// this function focus in the input value
function focusInput() {
  tasksInput.focus();
}
