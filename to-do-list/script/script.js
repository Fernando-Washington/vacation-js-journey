const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const AddTask = () => {
    if (inputBox.value === '') {
        alert("you need to add something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        inputBox.value = ''
    }
};

const Delete = () => {
    alert("ok");
};
