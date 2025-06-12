const todoList=[];

renderToDoList();


function renderToDoList()
{
    let todoListHTML= ' ';

    //arrow function
    todoList.forEach((todo,index) => {
        //const todo= todoList[i];
        const name= todo.name;
        const dueDate= todo.dueDate;
        const html=`
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${index},1);
            renderToDoList();
            " class="delete-todo-button js-delete-todo-button">Delete</button>
            
        `;
        todoListHTML= todoListHTML + html;

    });

    /*for(let i=0; i<todoList.length; i++)
    {
        const todo= todoList[i];
        const name= todo.name;
        const dueDate= todo.dueDate;
        const html=`
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${i},1);
            renderToDoList();
            " class="delete-todo-button">Delete</button>
            
        `;
        todoListHTML= todoListHTML + html;
    }*/
    document.querySelector('.js-todo-listdiv').innerHTML=todoListHTML;
}


//add event
document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addtodo();
});



function addtodo()
{
    const inputElement= document.querySelector('.js-name-input');
    const name= inputElement.value;

    const dateinputElement= document.querySelector('.js-dueDate-input');
    const dueDate= dateinputElement.value;

    todoList.push({name: name, dueDate: dueDate});

    inputElement.value=' ';

    renderToDoList();
}
