import {
    wordsArrey
} from './english_words.js';


// ---------Random dinner--------
const dish = document.querySelector('.dinner');
const sideDish = ['греча', 'булгур', 'овсянка', 'рис', 'макароны', 'жаренная картоха', 'пюре', 'пшеничная каша', 'шаверма', 'бургер', 'лапша WOK', 'вода'];
const mainDish = ['сосиски', 'курица', 'мясо с апельсинами', 'рулет из курицы с сосиской', 'сосиски', 'курица с овощами', 'колбаса'];
dish.addEventListener('click', () => {
    function getRandomInt(arrSide, arrMain) {

        let monSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            tueSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            wedSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            thuSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            friSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            satSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            sunSide = arrSide[(Math.round(Math.random() * (arrSide.length - 1)))],
            monMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))],
            tueMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))],
            wedMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))],
            thuMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))],
            friMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))],
            satMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))],
            sunMain = arrMain[(Math.round(Math.random() * (arrMain.length - 1)))];

        if (monSide == 'шаверма' || monSide == 'бургер' || monSide == 'лапша WOK') {
            monMain = 'все';
        }
        if (tueSide == 'шаверма' || tueSide == 'бургер' || tueSide == 'лапша WOK') {
            tueMain = 'все';
        }
        if (wedSide == 'шаверма' || wedSide == 'бургер' || wedSide == 'лапша WOK') {
            wedMain = 'все';
        }
        if (thuSide == 'шаверма' || thuSide == 'бургер' || thuSide == 'лапша WOK') {
            thuMain = 'все';
        }
        if (friSide == 'шаверма' || friSide == 'бургер' || friSide == 'лапша WOK') {
            friMain = 'все';
        }
        if (satSide == 'шаверма' || satSide == 'бургер' || satSide == 'лапша WOK') {
            satMain = 'все';
        }
        if (sunSide == 'шаверма' || sunSide == 'бургер' || sunSide == 'лапша WOK') {
            sunMain = 'все';
        }
        return `Понедельник - ${monSide} и ${monMain}\nВторник - ${tueSide} и ${tueMain}\nСреда - ${wedSide} и ${wedMain}\nЧетверг - ${thuSide} и ${thuMain}\nПятница - ${friSide} и ${friMain}\nСуббота - ${satSide} и ${satMain}\nВоскресенье - ${sunSide} и ${sunMain}\n`;
    }
    alert(getRandomInt(sideDish, mainDish));
});

// -------------English---------------

const english = document.querySelector('.english .btn'),
    englishFruits = document.querySelector('.english__fruits .btn'),
    englishVegetables = document.querySelector('.english__vegetables .btn'),
    englishFood = document.querySelector('.english__food .btn'),
    englishHumanBody = document.querySelector('.english__HumanBody .btn'),
    rusFruits = document.querySelector('.rus__fruits .btn'),
    rusVegetables = document.querySelector('.rus__vegetables .btn'),
    rusFood = document.querySelector('.rus__food .btn'),
    rushHumanBody = document.querySelector('.rus__HumanBody .btn'),
    modal = document.querySelector('.modal'),
    form = document.querySelector('modal__form'),
    verification = document.querySelector('.modal__verification'),
    input = document.querySelector('input'),
    submit = document.querySelector('.modal__submit'),
    stoper = document.querySelector('.modal__stop');

function verificationEng(subject) {
    let result = '',
        correct = '',
        wrong = '',
        counter = 0,
        correctCounter = 0,
        word;

    // for (let key in subject) {
    //     word = prompt(`Как переводится '${key}'?`, '').toLowerCase().trim();
    //     counter++;
    //     if (word == 'стоп' || word == 'stop') {
    //         counter--;
    //         break;
    //     } else if (word == '' || !subject[key].includes(word) ) {
    //         wrong += `${word} это не ${key}, ${key} - это "${subject[key]}"\n`;
    //         alert(`Неверно!\nПравильный перевод ${key} - "${subject[key]}"`);
    //     } else if (subject[key].includes(word)) {
    //         alert(`Верно!\n${key} - это ${subject[key]}`);
    //         correct += `${key} - ${subject[key]}\n`;
    //         correctCounter++;
    //     }

    // }

    for (let key in subject) {
        verification.innerHTML = `<div class="modal__verification"> Как переводится ${key}? </div>`;
        counter++;
        if (input.value == 'стоп' || input.value == 'stop') {
            counter--;
            break;
        } else if (input.value == '' || !subject[key].includes(input.value)) {
            wrong += `${input.value} это не ${key}, ${key} - это "${subject[key]}"\n`;
            console.log(`Неверно!\nПравильный перевод ${key} - "${subject[key]}"`);
        } else if (subject[key].includes(input.value)) {
            console.log(`Верно!\n${key} - это ${subject[key]}`);
            correct += `${key} - ${subject[key]}\n`;
            correctCounter++;
        }

    }
    console.log(`Ваш результат ${correctCounter} из ${counter}`);
    result = `Верные ответы:\n${correct}\nНеверные ответы:\n${wrong} \n`;
    console.log(result);
    return result;
}

function verificationRus(subject) {
    let result = '',
        correct = '',
        wrong = '',
        counter = 0,
        correctCounter = 0,
        word;

    for (let key in subject) {
        word = prompt(`Как переводится '${subject[key]}'?`, '').toLowerCase().trim();
        counter++;
        if (word == 'стоп' || word == 'stop') {
            counter--;
            break;
        } else if (word == '' || !key.includes(word)) {
            wrong += `${word} это не ${subject[key]}, ${subject[key]} - это "${key}"\n`;
            alert(`Неверно!\nПравильный перевод ${subject[key]} - "${key}"`);
        } else if (key.includes(word)) {
            alert(`Верно!\n${subject[key]} - это ${key}`);
            correct += `${subject[key]} - ${key}\n`;
            correctCounter++;
        }

    }
    alert(`Ваш результат ${correctCounter} из ${counter}`);
    result = `Верные ответы:\n${correct}\nНеверные ответы:\n${wrong} \n`;
    return result;
}

//   --------English words----------

let number = 0;
englishHumanBody.addEventListener('click', () => {
    modal.classList.add('active');

    
    const objKeys = Object.keys(wordsArrey['The human body']),
        wordsArr = [];
    let i = 0;
    let result = '',
        correct = '',
        wrong = '',
        counter = 0,
        correctCounter = 0;
    
    for (let key in wordsArrey['The human body']) {
        wordsArr.push(wordsArrey['The human body'][key]);
    }
    console.log(`Вот ключи объекта: ${objKeys}`);
    console.log(`Вот значения объекта ${wordsArr}`);
    verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится ${objKeys[i]} </div>`;
    
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        counter++;
        let inputWord = input.value.toLowerCase().trim();
        verification.innerHTML = `<div class="modal__verification"> ${counter + 1}/${wordsArr.length} <br> Как переводится ${objKeys[i+1]} </div>`;
        if (inputWord == '' || !wordsArr[i].includes(inputWord)) {
            wrong += `${inputWord} это не ${objKeys[i]}, ${objKeys[i]} - это "${wordsArr[i]}"\n`;
            console.log(`Неверно!\nПравильный перевод ${objKeys[i]} - "${wordsArr[i]}"`);
        } else if (wordsArr[i].includes(inputWord)) {
            console.log(`Верно!\n${objKeys[i]} - это ${wordsArr[i]}`);
            correct += `${objKeys[i]} - ${wordsArr[i]}\n`;
            correctCounter++;
        }
        
        input.value = '';
        i++;
        if (i == wordsArr.length) {
            console.log(`Ваш результат ${correctCounter} из ${counter}`);
            result = `Верные ответы:\n${correct}\nНеверные ответы:\n${wrong} \n`;
            console.log(result);
            modal.classList.remove('active');
            // return result;
        }
        
    });
    stoper.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`Ваш результат ${correctCounter} из ${counter}`);
        result = `Верные ответы:\n${correct}\nНеверные ответы:\n${wrong} \n`;
        console.log(result);
        modal.classList.remove('active');
    });
    
});




englishFruits.addEventListener('click', () => {
    alert(`Вы выбрали тему "FRUITS - ФРУКТЫ", если захотите остановиться и посмотреть результаты, просто введите "STOP" или "СТОП" `);
    alert(verificationEng(wordsArrey.fruits));
});
englishVegetables.addEventListener('click', () => {
    alert(`Вы выбрали тему "VEGETABLES - ОВОЩИ", если захотите остановиться и посмотреть результаты, просто введите "STOP" или "СТОП" `);
    alert(verificationEng(wordsArrey.vegetables));
});
englishFood.addEventListener('click', () => {
    alert(`Вы выбрали тему "FOOD - ЕДА", если захотите остановиться и посмотреть результаты, просто введите "STOP" или "СТОП" `);
    alert(verificationEng(wordsArrey.food));
});



//   --------Rus words----------
rusFruits.addEventListener('click', () => {
    alert(`Вы выбрали тему "FRUITS - ФРУКТЫ", если захотите остановиться и посмотреть результаты, просто введите "STOP" или "СТОП" `);
    alert(verificationRus(wordsArrey.fruits));
});
rusVegetables.addEventListener('click', () => {
    alert(`Вы выбрали тему "VEGETABLES - ОВОЩИ", если захотите остановиться и посмотреть результаты, введите "STOP" или "СТОП" `);
    alert(verificationRus(wordsArrey.vegetables));
});
rusFood.addEventListener('click', () => {
    alert(`Вы выбрали тему "FOOD - ЕДА", если захотите остановиться и посмотреть результаты, просто введите "STOP" или "СТОП" `);
    alert(verificationRus(wordsArrey.food));
});
rushHumanBody.addEventListener('click', () => {
    alert(`Вы выбрали тему "FOOD - ЕДА", если захотите остановиться и посмотреть результаты, просто введите "STOP" или "СТОП" `);
    alert(verificationRus(wordsArrey['The human body']));
});



// Первый вариант выбора темы с помощью ввода:
// english.addEventListener('click', () => {

//     alert('Привет! Давай проверим твой словарный запас по Английскому языку!');
//     let subject = prompt('Введите название раздела по которому Вы бы хотели проверить свои знания ангийских слов:\n1) Фрукты - введите "fruits"\n2) Овощи - введите "vegetables"\n3) Еда - введите "food"', '').toLowerCase().trim();



//     if (subject == 'fruits' || subject == 'vegetables' || subject == 'food') {
//         alert(`Вы выбрали тему ${subject}, если захотите остановится и посмотреть результаты, просто введите "СТОП"`);
//     }

//     if (subject == 'fruits') {
//         subject = fruits;
//     } else if (subject == 'vegetables') {
//         subject = vegetables;
//     } else if (subject == 'food') {
//         subject = food;
//     } else {
//         return alert(`Введено неверное значение, перезагрузите страницу`);
//     }
//     alert(verificationEng(subject));
// });