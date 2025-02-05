document.addEventListener('DOMContentLoaded', function() {
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const messages = document.getElementById('messages');

let miArray = JSON.parse(localStorage.getItem('miArray')) || [];
});