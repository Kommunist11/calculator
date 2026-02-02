let ter = ''; //основная переменная
let ter2 = ''; //вторичная перменная
let op = ""; // действие
let tet = 0; // наличие точки
let leng = 0; //счётчик длины переменной

function onClickButton(el) { //ввод числа
    if (leng < 12){// проверка длины числа
    ter += el;
    leng++;
    document.getElementById('dicplei').innerHTML = ter;}
}

document.addEventListener('keydown', e => { // ввод через клавиатуру
  if (/\d/.test(e.key) & leng < 12) {
    ter += e.key;
    leng++;
    document.getElementById('dicplei').innerHTML = ter;
    }else if(e.key === "+") {
        plass();
    } else if(e.key === "-") {
        mines();
    }else if(e.key === "/") {
        division();
    }else if(e.key === "*") {
        multiplication();
    }else if(e.key === "Delete") {
        drobi();
    }else if(e.key === "Enter") {
        readi();
    }else if(e.key === "Backspace") {
        clearr();
    }
  } 
);

function drobi() { //плавающая точка
    if (tet == 1){   
    }else {
    ter += ".";

    document.getElementById('dicplei').innerHTML = ter;
    tet = 1;
}}
    
function plass(){ //сложение
    op = 'plas';
    ter2 = ter;
    ter = '';
    tet = 0;
    leng = 0;
    document.getElementById("test").innerHTML = "плюс";
}

function mines(){ //вычитание
    op = 'mines';
    ter2 = ter;
    ter = '';
    tet = 0;
    leng = 0;   
    document.getElementById("test").innerHTML = "минус";
}

function multiplication(){ //умножение
    op = 'multiplication';
    ter2 = ter;
    ter = '';
    tet = 0;
    leng = 0;    
    document.getElementById("test").innerHTML = "умножение";
}

function division(){ // деление
    op = 'division';
    ter2 = ter;
    ter = '';
    tet = 0;
    leng = 0;    
    document.getElementById("test").innerHTML = "деление";
}

function clearr() { //очистка памяти
    ter = "";
    ter2 = "";
    op = "";
    tet = 0;
    leng = 0;    
    document.getElementById("test").innerHTML = "очистка";
    document.getElementById('dicplei').innerHTML = ter;
}

function readi() { // вывод ответа
    ter = Number(ter)
    ter2 = Number(ter2)
    switch (op) {
        case "plas":
            ter += ter2
            break;
        case "mines":
            ter -= ter2
            break;
        case "multiplication":
            ter *= ter2
            break;
        case "division":
            if (ter == 0){
                alert('Деление на 0 не доступно');
            }else{
            ter /= ter2}
            break;
        default:
            break;
    }
    tet = 0;
    leng = 0;    
    document.getElementById('dicplei').innerHTML = ter;
    
}