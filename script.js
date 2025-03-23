const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // checks if there's anything in the input box. if not it sends and alert window up with the following message.
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        // creates an li element, and a JS access point to it
        let li = document.createElement('li');
        // assigns the HTML content of that li element to whatever is entered in the input box
        li.innerHTML = inputBox.value;
        // adds the li element to the listContainer element as a child
        listContainer.appendChild(li);

    }
    // clears input field upon button click
    inputBox.value = '';
}

// so the return button works inside the input box
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTask();
        event.preventDefault();
    }
})

