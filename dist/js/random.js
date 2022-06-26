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