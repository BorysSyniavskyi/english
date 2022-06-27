'use script';

import {
    wordsArrey
} from './english_words.js';

// -------------English---------------

const subjectArr = Object.keys(wordsArrey),
    englishSubjects = document.querySelector('.english__wrapper'),
    rusSubjects = document.querySelector('.rus__wrapper'),
    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    verification = document.querySelector('.modal__verification'),
    input = document.querySelector('input'),
    modalTrue = document.querySelector('.modal_true'),
    modalFalse = document.querySelector('.modal_false'),
    submit = document.querySelector('.modal__submit'),
    stoper = document.querySelector('.modal__stop'),
    modalResult = document.querySelector('.modal_result'),
    modalCorrect = document.querySelector('.correct'),
    modalWrong = document.querySelector('.wrong');

// -------------English words---------------

for (let i = 0; i < subjectArr.length; i++) {
    const engSubj = document.createElement('button');
    engSubj.classList.add('btn');
    engSubj.innerHTML = `${subjectArr[i]}`;
    englishSubjects.append(engSubj);
}

for (let i = 0; i < subjectArr.length; i++) {
    const rusSubj = document.createElement('button');
    rusSubj.classList.add('btn');
    rusSubj.innerHTML = `${subjectArr[i]}`;
    rusSubjects.append(rusSubj);
}

const engbtn = englishSubjects.querySelectorAll('.btn');
const rusbtn = rusSubjects.querySelectorAll('.btn');
let thisSubj;

englishSubjects.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('btn')) {
        engbtn.forEach((item, i) => {
            if (item == target) {
                thisSubj = target.textContent;
                verificationEng(wordsArrey[target.textContent]);
            }
        });
    }
});

rusSubjects.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('btn')) {
        rusbtn.forEach((item, i) => {
            if (item == target) {
                thisSubj = target.textContent;
                verificationRus(wordsArrey[target.textContent]);
            }
        });
    }
});

let i = 0,
    correct = '',
    wrong = '',
    counter = 0,
    correctCounter = 0;

function verificationEng(subject) {
    englishSubjects.classList.add('hide');
    rusSubjects.classList.add('hide');
    overlay.classList.add('active');
    modal.classList.add('active');
    const objKeys = Object.keys(subject),
        wordsArr = [];

    for (let key in subject) {
        wordsArr.push(subject[key]);
    }
    // console.log(`Вот ключи объекта: ${objKeys}`);
    // console.log(`Вот значения объекта ${wordsArr}`);
    verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится "${objKeys[i]}" </div>`;
    input.focus();
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        if (i == wordsArr.length) {
            closeAndResult();
        } else if (i < wordsArr.length) {
            counter++;
            let inputWord = input.value.toLowerCase().trim();
            if (i + 1 < wordsArr.length) {
                verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится "${objKeys[i+1]}" </div>`;

            } else {
                verification.innerHTML = `<div class="modal__verification"> Поздравляем! <br><br> Вы прошли все слова по этой теме! <br><br> Нажмите "Далее", что бы посмотреть результат</div>`;
                // window.addEventListener('focusin', event => console.log(new Date(), event.target));
                stoper.classList.add('hide');
                input.classList.add('hide');
                submit.classList.add('center_column');
                verification.classList.add('center_row');
            }
            if (inputWord == '' || !wordsArr[i].includes(inputWord)) {
                wrong += `"${objKeys[i]}" - это ${wordsArr[i]} (ваш ответ "${inputWord}")<br>`;
                thisWordWrongEng();

            } else if (wordsArr[i].includes(inputWord)) {
                thisWordCorrectEng();
                correct += `${objKeys[i]} - ${wordsArr[i]}<br>`;
                correctCounter++;
            }
            input.value = '';
            i++;
        }
    });

    function thisWordWrongEng() {

        modalFalse.classList.add('active');
        modalFalse.innerHTML = `Неверно!<br><br>Правильный перевод "${objKeys[i]}" - ${wordsArr[i]}<br><br> 
        <button class="btn">
        ОК
        </button>`;
        const btnFalse = modalFalse.querySelector('button');
        btnFalse.focus();
        btnFalse.addEventListener('click', () => {
            modalFalse.classList.remove('active');
            input.focus();
        });

    }

    function thisWordCorrectEng() {
        modalTrue.classList.add('active');
        modalTrue.innerHTML = `Верно!<br><br>"${objKeys[i]}" - это ${wordsArr[i]}<br><br>
        <button class="btn">
        ОК
        </button>`;
        const btnTrue = modalTrue.querySelector('button');
        btnTrue.focus();
        btnTrue.addEventListener('click', () => {
            modalTrue.classList.remove('active');
            input.focus();
        });
    }

    function closeAndResult() {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        modalResult.classList.add('active');
        modalResult.innerHTML = `<span>Ваш результат по теме "${thisSubj}" - ${correctCounter} из ${counter} </span><br><br> <button>Закрыть и вернуться к выбору темы</button><br><br> 
        <button class="modal_result_close">
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                </svg>
        </button>`;
        modalCorrect.innerHTML = `<span>Верные ответы:</span><br>${correct}<br>`;
        modalWrong.innerHTML = `<span>Неверные ответы:</span><br>${wrong}`;
        modalResult.append(modalCorrect);
        modalResult.append(modalWrong);
        modalResult.querySelectorAll('button').forEach((item) => {
            item.addEventListener('click', (event) => {
                modalResult.classList.remove('active');
                document.location.reload();
            });
        });
    }
    stoper.addEventListener('click', () => {
        closeAndResult();
    });
    // overlay.addEventListener('click', () => {
    //     closeAndResult();

    // });
}

function verificationRus(subject) {
    englishSubjects.classList.add('hide');
    rusSubjects.classList.add('hide');
    overlay.classList.add('active');
    modal.classList.add('active');

    const objKeys = Object.keys(subject),
        wordsArr = [];

    for (let key in subject) {
        wordsArr.push(subject[key]);
    }
    verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится ${wordsArr[i]} </div>`;
    input.focus();
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        if (i == wordsArr.length) {
            closeAndResult();
        } else if (i < wordsArr.length) {
            counter++;
            let inputWord = input.value.toLowerCase().trim();
            if (i + 1 < wordsArr.length) {
                verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится ${wordsArr[i+1]} </div>`;

            } else {
                verification.innerHTML = `<div class="modal__verification"> Поздравляем! <br><br> Вы прошли все слова по этой теме! <br><br> Нажмите "Далее", что бы посмотреть результат</div>`;
                stoper.classList.add('hide');
                input.classList.add('hide');
                submit.classList.add('center_column');
                verification.classList.add('center_row');
            }
            if (inputWord == '' || !objKeys[i].includes(inputWord)) {
                wrong += `"${wordsArr[i]}" - это "${objKeys[i]}"(ваш ответ "${inputWord}")<br>`;
                thisWordWrongRus();

            } else if (objKeys[i].includes(inputWord)) {
                thisWordCorrectRus();
                correct += `${wordsArr[i]} - ${objKeys[i]}<br>`;
                correctCounter++;
            }

            input.value = '';
            i++;
        }
    });

    function thisWordWrongRus() {
        modalFalse.classList.add('active');
        modalFalse.innerHTML = `Неверно!<br><br>Правильный перевод "${wordsArr[i]}" - ${objKeys[i]}<br><br> 
        <button class="btn">
        ОК
        </button>`;
        const btnFalse = modalFalse.querySelector('button');
        btnFalse.focus();
        btnFalse.addEventListener('click', () => {
            modalFalse.classList.remove('active');
            input.focus();
        });
    }

    function thisWordCorrectRus() {
        modalTrue.classList.add('active');
        modalTrue.innerHTML = `Верно!<br><br>"${wordsArr[i]}" - это ${objKeys[i]}<br><br>
        <button class="btn">
        ОК
        </button>`;
        const btnTrue = modalTrue.querySelector('button');
        btnTrue.focus();
        btnTrue.addEventListener('click', () => {
            modalTrue.classList.remove('active');
            input.focus();
        });
    }

    function closeAndResult() {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        modalResult.classList.add('active');
        modalResult.innerHTML = `<span>Ваш результат по теме "${thisSubj}" - ${correctCounter} из ${counter} </span><br><br> <button>Закрыть и вернуться к выбору темы</button><br><br> 
        <button class="modal_result_close">
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                </svg>
        </button>`;
        modalCorrect.innerHTML = `<span>Верные ответы:</span><br>${correct}<br>`;
        modalWrong.innerHTML = `<span>Неверные ответы:</span><br>${wrong}`;
        modalResult.append(modalCorrect);
        modalResult.append(modalWrong);
        modalResult.querySelectorAll('button').forEach((item) => {
            item.addEventListener('click', (event) => {
                modalResult.classList.remove('active');
                document.location.reload();
            });
        });
    }
    stoper.addEventListener('click', () => {
        closeAndResult();

    });
    // overlay.addEventListener('click', () => {
    //     closeAndResult();

    // });
}