let press = '';
const show = document.getElementById('show');
function deleteAndShow() {
 press = String(press);
 press = press.slice(0, -1);
 show.innerHTML = `${press}`;
}

function showInCalc(number) {
 press += number;
 show.innerHTML = `${press}`;
}

function solve() {
 press = press.replace(/x/g, '*').replace(/÷/g, '/');
 let result = new Function('return ' + press)();
 press = String(result);
 show.innerHTML = `${result}`;
}

for (let i = 9; i >= 0; i--) {
 document.write(`<button onclick='showInCalc(${i});' id="btn_number">${i}</button>`);
}