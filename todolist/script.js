const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let taskBeingEdited = null; 

function renderTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const status = document.createElement("small");
  status.classList.add("status");
  status.textContent = "Pending";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    status.textContent = li.classList.contains("completed")
      ? "Completed"
      : "Pending";
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    taskInput.value = span.textContent; 
    taskInput.focus();
    taskBeingEdited = span; 
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(status);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  taskList.appendChild(li);
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  if (taskBeingEdited) {
    taskBeingEdited.textContent = taskText;
    taskBeingEdited = null; 
  } else {
    renderTask(taskText);
  }

  taskInput.value = ""; 
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
