// 1. Задача
const regExp = /Регулярные выражения/

const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false


// 2. Задача
function startTimer() {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

startTimer();




// 3. Задача
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}
count()


// 4. Задача
const box = document.getElementById('myBox');


box.addEventListener('click', () => {
    box.classList.toggle('active-bg');
});



// 5. Задача
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json')
    xhr.send()

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        console.log(data)
    }
}
getData();