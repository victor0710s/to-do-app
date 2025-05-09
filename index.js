const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = input.value.trim();
    if (task !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
        <label>
            <input type="checkbox" class="task-checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="del-btn">Delete</span>
        `;
        list.appendChild(li);

        input.value = ''; // Clear the input field
    }
});

