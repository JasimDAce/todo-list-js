let todoList = [];

function addTodo(){
    const inputElementName = document.querySelector('.js-input-name');
    const inputElementDate = document.querySelector('.js-input-date');
    let obj = {
        name: inputElementName.value,
        date: inputElementDate.value
    };
    if(inputElementName.value !== ''){
        todoList.push(obj);
        preview();
    }
    inputElementName.value = '';
    inputElementDate.value = '';
}
function preview(){
    let todoListHtml = '';
    for(let i = 0 ; i < todoList.length;i++){
        let { name } = todoList[i];
        let { date } = todoList[i];
        let html = `
        <div>${name}</div>
        <div>${date}</div>
        <button  class="delete-button" onclick = "todoList.splice(${i},1); preview();">Delete</button>
        `;
        todoListHtml += html;
    }
    document.querySelector('.js-div')
        .innerHTML = todoListHtml;
}
