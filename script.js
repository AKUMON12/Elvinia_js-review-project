// == Elvinia's Todo CRUD Management ==

// Array to store todos
let todos = [];

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo(event) {
    event.preventDefault(); // Prevent form submission
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // Clear the input
        renderTodos();
    }
}

// Function to edit a todo
function editTodo(index) {
    const updatedTodo = prompt('Edit your todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listeners
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();



// Cursor spark effect
function spark(event) {
    let i = document.createElement('i');
    i.style.left = (event.clientX) + 'px';  // Use clientX to avoid scroll
    i.style.top = (event.clientY) + 'px';   // Use clientY to avoid scroll
    
    // To add random shape
    i.style.scale = `${Math.random() * 2 + 1}`;

    // Randomly set some property. --x and --y are the names of the variables
    // The i.style.setProperty function is used to set CSS custom properties (variables) directly on an element's style object.
    i.style.setProperty('--x', getRandomTransitionValue());
    i.style.setProperty('--y', getRandomTransitionValue());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 5000); // Adjust the time for when the spark should disappear
}

function getRandomTransitionValue() {
    return `${Math.random() * 600 - 300}px`;
}

document.addEventListener('mousemove', spark);
