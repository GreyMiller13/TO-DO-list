const buttonADD = document.querySelector('.btnAdd');

const buttonClear = document.querySelector('.btnClear');

const ul = document.querySelector('.tasks');

let input = document.querySelector('.inputTODO');

//Функционал работы кнопки добавления (ADD)
buttonADD.addEventListener('click', () => {
    //Создание кнопки удаления задания
    let button = document.createElement('button');
    button.innerText = 'x';
    button.style.color = 'white';
    button.style.backgroundColor = 'red';
    button.style.width = '20px';
    button.style.height = '20px';
    button.style.fontSize = '20px';
    button.style.textAlign = 'justify';
    button.id = 'delete-btn';

    //Создание чекбокса
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "checkbox-id";

    // Создание элемента списка
    let li = document.createElement('li');
    li.id = 'task-li';
    let div = document.createElement('div');
    let span = document.createElement('span');

    //Создание задания (добавление в ul)
    if (input.value !== '') {
        ul.append(li);
        li.append(div);
        //Поправить выравнивание кнопки
        div.append(button);
        div.append(checkbox);
        div.append(span);
        span.innerText = input.value;
        //Добавление класса CSS для выравнивания
        div.classList.add('tasks_orientation');
    }

    //очистка поля ввода названия задания
    input.value = '';
    
    //Функционал работы с чекбоксами
    CheckboxHandler();

    //Функционал работы с кнопкой удаления задания
    DeleteTask();
})

//Функционал работы кнопки добавления (Clear)
buttonClear.addEventListener('click', () => {
    //Очистка поля ввода названия задания
    if (input.value !== '') {
        input.value = '';
    }
    // Очистка списка заданий (удалить все li из ul)
    let collectionElemnts = document.querySelectorAll('#task-li');
    for (const element of collectionElemnts) {
        element.remove();
    }
})

// Функционал работы с чекбоксами
function CheckboxHandler() {
    let checkboxCollections = document.querySelectorAll('#checkbox-id');
    for (const checkbox of checkboxCollections) {
        checkbox.addEventListener('change', () => {
            if(checkbox.checked) {
                //Доступ к соседнему элементу для перечеркивания текста
                let parent = checkbox.parentNode;
                let span = parent.lastChild;
                span.style.textDecoration = 'line-through';
            }
        })
    }
}

//Функционал удаления задания
function DeleteTask() {
    let buttonCollections = document.querySelectorAll('#delete-btn');
    for (const button of buttonCollections) {
        button.addEventListener('click', () => {
            let parent = button.parentNode;
            parent.remove();
        })
    }
}


