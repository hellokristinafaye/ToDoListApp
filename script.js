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

        // adding a span for the close button
        // declaring a variable that allows dynamic JS access to an element
        // this line CREATES a new span element and we're accessing it in JS via the variable span
        let span = document.createElement('span');
        // this sets the HTML content of the span element to this special code that translates to a close icon
        span.innerHTML = '\u00d7';
        // adding the newly created span element to the newly created li element
        li.appendChild(span);

    }
    // clears input field upon button click
    inputBox.value = '';
    // updates local storage
    saveData();
}
// this dictates what happens when you click on certain elements. here it's (LI and SPAN)
listContainer.addEventListener('click', function (e) {
    // checks if the user is clicking the LI element, aka the list item/task
    if (e.target.tagName === "LI") {
        // this will change the styling - so the checkmark and through-line will appear
        e.target.classList.toggle("checked");
        // checks if the user is clicking the SPAN element, aka the close button
        // updates local storage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // deletes the span element in question from the listContainer
        e.target.parentElement.remove();
        // updates local storage
        saveData();
    }
}, false);


// local storage
// remember that you basically need 2 functions when you wanna utilize local storage, at least like this. 
// you need one function (saveData) to store your chosen info (in this case it's listContainer's HTML content and styling)
// and the second function you need will display the saved data.  This one needs to run like, all the time.  like every time you refresh the page so it's at a global level at the bottom of the file. 
// The saveData() as to go everywhere you would be changing the HTML content/styling in question. 
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

// so the return button works inside the input box
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTask();
        event.preventDefault();
    }
})

// displays local storage
showTask()