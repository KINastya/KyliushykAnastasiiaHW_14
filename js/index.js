const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1.Сума та кількість позитивних елементів.
const smNum = '';
function sumNum(arr) {
    let sumNumbers = 0;
    let countNumbers = '';
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= 0) {
            sumNumbers += arr[index];
            countNumbers++;
        }
    }
    return`Сума елементів ${sumNumbers}, кількість позитивних елементів ${countNumbers} `;
}
document.getElementById("task_01").innerHTML = sumNum(arr);

// 2.Мінімальний елемент масиву та його порядковий номер.
function minNumb(arr) {
    let minNumbers = Math.min(...arr);
    let ordinNumber = arr.indexOf(minNumbers);
    return `Найменший елемент ${minNumbers}, індекс ${ordinNumber}`;
}
document.getElementById("task_02").innerHTML = minNumb(arr);

// 3.Максимальний елемент масиву та його порядковий номер.
function maxNumb(arr) {
    let maxNumbers = Math.max(...arr);
    let ordinNumber = arr.indexOf(maxNumbers);
    return `Найбільший елемент ${maxNumbers}, індекс ${ordinNumber}`;
}
document.getElementById("task_03").innerHTML = maxNumb(arr);

// 4.Кількість негативних елементів.
function negativeNum(arr) {
    let countNum = 0;
    for (index = 0; index< arr.length; index++) {
        if (arr[index] < 0){
            countNum++;
        }
    }
    return `${countNum}`;
}
document.getElementById("task_04").innerHTML = negativeNum(arr);

// 5.Кількість непарних позитивних елементів.
function unpairedPositive(arr) {
    let countNum = 0;
    for (index = 0; index < arr.length; index++) {
        if(arr[index]%2 !== 0 && arr[index] > 0) {
            countNum++;
        }
    }
    return `${countNum}`;
}
document.getElementById("task_05").innerHTML = unpairedPositive(arr);

//6. Кількість парних позитивних елементів.
function evenPositive(arr) {
    let countNum = 0;
    for (index = 0; index < arr.length; index++){
        if(arr[index] % 2 === 0 && arr[index] > 0) {
            countNum++;
        }
    }
    return `${countNum}`;
}
document.getElementById("task_06").innerHTML = evenPositive(arr);

// 7.Сума парних позитивних елементів
function sumEvenPosEl(arr) {
    let sum = 0;
    for (index = 0; index < arr.length; index++){
        if(arr[index] % 2 === 0 && arr[index] > 0){
            sum += arr[index];
        }
    }
    return `${sum}`;
}
document.getElementById("task_07").innerHTML = sumEvenPosEl(arr);

// 8.Сума непарних позитивних елементів.
function sumUnpaPos(arr) {
    let sum = 0;
    for (index = 0; index < arr.length; index++) {
        if(arr[index]%2 !== 0 && arr[index] > 0) {
            sum += arr[index];
        }
    }
    return `${sum}`;
}
document.getElementById("task_08").innerHTML = sumUnpaPos(arr);

// 9.Добуток позитивних елементів.
function proPosElem(arr) {
    let mult = 1;
    for (index = 1; index < arr.length; index++){
        if(arr[index] > 0){
            mult *= arr[index];
        }
    }
    return `${mult}`;
}
document.getElementById("task_09").innerHTML = proPosElem(arr);

// 10.Найбільший серед елементів масиву, остальні обнулені.
function largArrayElem(arr) {
    let maxNumb = Math.max(...arr);

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === maxNumb) {
            continue;
        } else {
            arr[index] = 0;
        }
    }
    return `Максмальне число ${maxNumb}, вeсь массив ${arr}`;
}
document.getElementById("task_10").innerHTML = largArrayElem(arr);