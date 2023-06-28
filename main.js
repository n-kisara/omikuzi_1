'use strict';

const list = ["大吉", "小吉", "中吉", "末吉", "凶"];

function omikuzi() {
    let random = Math.floor(Math.random() * list.length);
    const result = document.getElementById('result');
    result.textContent = list[random];
}


const btn = document.querySelector('button');
btn.addEventListener('click',omikuzi);
