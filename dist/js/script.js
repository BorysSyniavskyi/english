'use script';

import {
    wordsArrey
} from './english_words.js';

// -------------English---------------

const subjectArr = Object.keys(wordsArrey),
    englishSubjects = document.querySelector('.english__wrapper'),
    

    // englishFruits = document.querySelector('.english__fruits .btn'),
    // englishVegetables = document.querySelector('.english__vegetables .btn'),
    // englishFood = document.querySelector('.english__food .btn'),
    // englishHumanBody = document.querySelector('.english__HumanBody .btn'),
    // englishFamily = document.querySelector('.english__Family .btn'),
    // englishAppearance = document.querySelector('.english__Appearance and character .btn'),
    // englishSenses = document.querySelector('.english__Senses .btn'),
    // englishEmotions = document.querySelector('.english__Emotions .btn'),
    // englishMoney = document.querySelector('.english__Money .btn'),
    // englishColors = document.querySelector('.english__Colors .btn'),
    // Сделай новые кнопки через криейт елемент, с помощью перебора subjectArr и добавь их в верстку с помощью append, после чего подобавляй с помощью иннерХТМЛ событие на каждую новую кнопку. Скорее всего нужно будет изменить немного верстки и структуру 

    rusFruits = document.querySelector('.rus__fruits .btn'),
    rusVegetables = document.querySelector('.rus__vegetables .btn'),
    rusFood = document.querySelector('.rus__food .btn'),
    rushHumanBody = document.querySelector('.rus__HumanBody .btn'),

    
    

    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    form = document.querySelector('modal__form'),
    verification = document.querySelector('.modal__verification'),
    input = document.querySelector('input'),
    modalTrue = document.querySelector('.modal_true'),
    modalFalse = document.querySelector('.modal_false'),
    submit = document.querySelector('.modal__submit'),
    stoper = document.querySelector('.modal__stop'),
    modalResult = document.querySelector('.modal_result'),
    modalCorrect = document.querySelector('.correct'),
    modalWrong = document.querySelector('.wrong');

// console.log(subjectArr);
// const engSubj = document.createElement('button');
// engSubj.classList.add('btn');
// engSubj.innerHTML = `${subjectArr[0]}`;
// englishSubjects.append(engSubj);

for (let i = 0; i < subjectArr.length; i++) {
    const engSubj = document.createElement('button');
    engSubj.classList.add('btn');
    engSubj.innerHTML = `${subjectArr[i]}`;
    englishSubjects.append(engSubj);
}

const engbtn = englishSubjects.querySelectorAll('.btn');
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

let i = 0,
result = '',
correct = '',
wrong = '',
counter = 0,
correctCounter = 0;

function verificationEng(subject) {
    
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
        counter++;
        let inputWord = input.value.toLowerCase().trim();
        verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится "${objKeys[i+1]}" </div>`;
        if (inputWord == '' || !wordsArr[i].includes(inputWord)) {
            wrong += `"${objKeys[i]}" - это ${wordsArr[i]} (ваш ответ "${inputWord}")<br>`;
            thisWordWrong();
        } else if (wordsArr[i].includes(inputWord)) {
            thisWordCorrect();
            correct += `${objKeys[i]} - ${wordsArr[i]}<br>`;
            correctCounter++;
        }
        
        input.value = '';
        i++;
        if (i == wordsArr.length) {
            closeAndResult();
        }
        
    });
    function thisWordWrong () {
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
    function thisWordCorrect () {
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
        // result = `<span>Ваш результат по теме "${thisSubj}" - ${correctCounter} из ${counter} <br><br> Верные ответы:</span><br>${correct}<br><span>Неверные ответы:</span><br>${wrong} <br> <button>Закрыть и вернуться к выбору темы</button>`;
        modal.classList.remove('active');
        overlay.classList.remove('active');
        // document.location.reload();
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
    overlay.addEventListener('click', () => {
        // closeAndResult();

    });
}

function verificationRus(subject) {
    overlay.classList.add('active');
    modal.classList.add('active');
    const objKeys = Object.keys(subject),
        wordsArr = [];
    let i = 0,
        result = '',
        correct = '',
        wrong = '',
        counter = 0,
        correctCounter = 0;

    for (let key in subject) {
        wordsArr.push(subject[key]);
    }
    verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится ${wordsArr[i]} </div>`;

    submit.addEventListener('click', (event) => {
        event.preventDefault();
        counter++;
        let inputWord = input.value.toLowerCase().trim();
        verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится ${wordsArr[i+1]} </div>`;
        if (inputWord == '' || !objKeys[i].includes(inputWord)) {
            wrong += `${inputWord} это не ${wordsArr[i]}, ${wordsArr[i]} - это "${objKeys[i]}"\n`;
            console.log(`Неверно!\nПравильный перевод ${wordsArr[i]} - "${objKeys[i]}"`);
        } else if (objKeys[i].includes(inputWord)) {
            console.log(`Верно!\n${wordsArr[i]} - это ${objKeys[i]}`);
            correct += `${wordsArr[i]} - ${objKeys[i]}\n`;
            correctCounter++;
        }
        input.value = '';
        i++;
        if (i == wordsArr.length) {
            // console.log(`Ваш результат ${correctCounter} из ${counter}`);
            // result = `Верные ответы:\n${correct}\nНеверные ответы:\n${wrong} \n`;
            // console.log(result);
            // modal.classList.remove('active');
            // submit.removeEventListener('click');
            // return result;
        }
    });

    function closeAndResult() {
        console.log(`Ваш результат ${correctCounter} из ${counter}`);
        result = `Верные ответы:\n${correct}\nНеверные ответы:\n${wrong} \n`;
        console.log(result);
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    stoper.addEventListener('click', () => {
        closeAndResult();

    });
    overlay.addEventListener('click', () => {
        closeAndResult();

    });
}

//   --------English words----------

// englishHumanBody.addEventListener('click', () => {
//     verificationEng(wordsArrey['The human body']);
// });
// englishFruits.addEventListener('click', () => {
//     verificationEng(wordsArrey.fruits);
// });
// englishVegetables.addEventListener('click', () => {
//     verificationEng(wordsArrey.vegetables);
// });
// englishFood.addEventListener('click', () => {
//     verificationEng(wordsArrey.food);
// });
// englishFamily.addEventListener('click', () => {
//     verificationEng(wordsArrey.family);
// });

//   --------Rus words----------

rusFruits.addEventListener('click', () => {
    verificationRus(wordsArrey.fruits);
});
rusVegetables.addEventListener('click', () => {
    verificationRus(wordsArrey.vegetables);
});
rusFood.addEventListener('click', () => {
    verificationRus(wordsArrey.food);
});
rushHumanBody.addEventListener('click', () => {
    verificationRus(wordsArrey['The human body']);
});