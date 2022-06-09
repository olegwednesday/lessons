"use strict";

const button = document.getElementById('intro_button');
button.addEventListener('click', () => {
    let answer = prompt('Ти Підар?', '');
    if (answer == 'ні') {
        let translate = prompt('Як буде російською ні?', '');
        if (translate == 'нет') {
            alert('Підора отвєт!');
        }
    } else if (answer == 'нет') {
        alert('Підора отвєт!');
    } else if (answer == 'да'||answer == 'так') {
        alert('Я так і думав');
    } else {
        alert('Навіть підар відповів би краще')
    }
}
)


