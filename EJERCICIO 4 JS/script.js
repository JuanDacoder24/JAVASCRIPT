document.addEventListener('DOMContentLoaded', function() {

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const messages = document.getElementById('messages');

let miArray = JSON.parse(localStorage.getItem('miArray')) || [];

function renderTasks(){
    taskList.innerHTML = ''; 
    miArray.forEach((task, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <span>${task}</span>
              <button class="delete-button" onclick="deleteTask(${index})">Eliminar</button>
              <button class="complete-button" onclick="completeTask(${index})">Completado</button>`; //boton de tarea completada
          taskList.appendChild(li);
      });
}

function deleteTask(index) {
    
    miArray.splice(index, 1); 
    localStorage.setItem('miArray', JSON.stringify(miArray));  
    renderTasks();  
    showMessage('Tarea eliminada correctamente', 'success'); 
}

function completeTask(index){ //he creado una funcion para el boton de tarea completada
    task.splice(index, 1);
    localStorage.setItem('miArray', JSON.stringify(miArray));
    renderTasks();
    mensaje.textContent = ('Tarea completada');
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();  
    const newTask = taskInput.value.trim();  
    if (newTask !== '') {
        miArray.push(newTask);  
        localStorage.setItem('miArray', JSON.stringify(miArray));  
        renderTasks();  
        taskInput.value = ''; 
        showMessage('Tarea agregada correctamente', 'success'); 
    } else {
        showMessage('Por favor, ingrese una tarea válida', 'error');  
    }
});

renderTasks();
});