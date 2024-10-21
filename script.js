// var todo = 0;

// let groc = document.querySelector('#groc');






// /* let mytodo = '<div class="list"><p>'+todo+'</p><div class="icons"><a href=""><i class="fa-solid fa-pen-to-square green"></i></a><a href=""><i class="fa-solid fa-trash red"></i></a></div></div>'*/


// var add = document.querySelector('.input');
// var kk = 0;


// function addup() {
//     kk+=1;
// let div1 = document.createElement('div');
// div1.setAttribute('id', 'div'+kk)

// let div2 = document.createElement('div');
// let p  = document.createElement('p');
// let a = document.createElement('a');
// let i1 = document.createElement('i');
// let i2 = document.createElement('i');
// i1.setAttribute('class', 'fa-solid fa-pen-to-square green')
// i1.setAttribute('id', 'btnD'+kk);
// i2.setAttribute('class', 'fa-solid fa-trash  red')
// i2.setAttribute('id', 'btnE'+kk)
// div1.setAttribute('class', 'list');
// div2.setAttribute('class','icons');
// todo = groc.value;
// let text = document.createTextNode(todo);
// p.appendChild(text);

// div2.append(a.appendChild(i1));
// div2.append(a.appendChild(i2));
// div1.append(p);
// div1.append(div2);
// add.appendChild(div1);
// }


// let todo = 0;
// let groc = document.querySelector('#groc'); // Input field for task
// let add = document.querySelector('.input'); // Container for to-do list
// let kk = 0;

// function addup() {
//     const task = groc.value.trim(); // Get and trim input value
//     if (!task) {
//         alert("Please enter a task!"); // Validation: Prevent empty tasks
//         return;
//     }
//     kk += 1; // Increment counter for unique ID

//     // Create necessary elements for a to-do item
//     let div1 = document.createElement('div');
//     div1.setAttribute('id', 'div' + kk);
//     div1.setAttribute('class', 'list');

//     let p = document.createElement('p');
//     p.textContent = task;

//     let div2 = document.createElement('div');
//     div2.setAttribute('class', 'icons');

//     // Create edit and delete icons
//     let editIcon = document.createElement('i');
//     editIcon.setAttribute('class', 'fa-solid fa-pen-to-square green');
//     editIcon.setAttribute('id', 'btnD' + kk);

//     let deleteIcon = document.createElement('i');
//     deleteIcon.setAttribute('class', 'fa-solid fa-trash red');
//     deleteIcon.setAttribute('id', 'btnE' + kk);

//     // Add event listener for delete functionality
//     deleteIcon.addEventListener('click', function () {
//         div1.remove(); // Remove the entire task div
//     });

//     // Append icons to the icons container
//     div2.append(editIcon, deleteIcon);

//     // Append elements to the to-do item container
//     div1.append(p, div2);

//     // Append the new to-do item to the main list
//     add.appendChild(div1);

//     // Clear the input field after adding the task
//     groc.value = '';
// }


let groc = document.querySelector('#groc'); // Input field for task
let add = document.querySelector('.input'); // Container for to-do list
let kk = 0;

function addup() {
    const task = groc.value.trim(); // Get and trim input value
    if (!task) {
        alert("Please enter a task!"); // Validation: Prevent empty tasks
        return;
    }
    kk += 1; // Increment counter for unique ID

    // Create elements for a to-do item
    let div1 = document.createElement('div');
    div1.setAttribute('id', 'div' + kk);
    div1.setAttribute('class', 'list');

    let p = document.createElement('p');
    p.textContent = task;

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'icons');

    // Create edit and delete icons
    let editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'fa-solid fa-pen-to-square green');
    editIcon.setAttribute('id', 'btnD' + kk);

    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa-solid fa-trash red');
    deleteIcon.setAttribute('id', 'btnE' + kk);

    // Delete functionality: Remove the task
    deleteIcon.addEventListener('click', function () {
        div1.remove();
    });

    // Edit functionality: Switch to input field for editing
    editIcon.addEventListener('click', function () {
        let input = document.createElement('input');
        input.type = 'text';
        input.value = p.textContent;
        input.classList.add('edit-input'); // Add styling if needed

        // Save edited value on pressing Enter or clicking outside
        input.addEventListener('blur', function () {
            if (input.value.trim()) {
                p.textContent = input.value.trim(); // Update the task with new value
            }
            div1.replaceChild(p, input); // Switch back to <p> element
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                input.blur(); // Trigger blur to save the new value
            }
        });

        div1.replaceChild(input, p); // Switch <p> to input field
        input.focus(); // Focus the input for immediate editing
    });

    // Append icons to the icons container
    div2.append(editIcon, deleteIcon);

    // Append elements to the to-do item container
    div1.append(p, div2);

    // Append the new to-do item to the main list
    add.appendChild(div1);

    // Clear the input field after adding the task
    groc.value = '';
}
