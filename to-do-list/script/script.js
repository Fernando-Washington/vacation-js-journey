const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const AddTask = () => {
    if (inputBox.value === '') {
        alert("you need to add something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        var span = document.createElement('span')
        span.innerHTML = '<i class="bi bi-x-lg"></i>'
        span.onclick = () => li.remove();

        li.appendChild(span)
    // toggle is good to alternate something between two states
    // classList is more efficient than className
        li.onclick = () => li.classList.toggle('checked');
    /* try to add a validation
        listContainer.onclick = () => 
        if (li.className === 'checked') {
        } else {
            li.className = 'checked'
        }
    */
        inputBox.value = ''
    }
};