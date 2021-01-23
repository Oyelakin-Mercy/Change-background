const input = document.querySelector('input');
const btn = document.querySelector('.button-2');
const para = document.querySelector('p');
const parae = document.querySelector('.para-2');
const button = document.querySelector('button');
function squared(num) {
  return num * num ;
}
function cubed(num) {
  return num * num * num ;
}


button.onclick = function() {
let num  = input.value
if (isNaN(num)) {
para.textContent = 'This is not a number';
 parae.textContent = '';
}
  else if (num == '') {
    para.textContent = '';
    parae.textContent = '';
  }
  else {
    para.textContent = 'The square of the number is ' + squared(num);
    parae.textContent = 'The cube of the number is ' + cubed(num);
    para.style.color = 'white';
    parae.style.color = 'white';
  }
}
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(200) + ')';
  document.body.style.backgroundColor = rndCol;
}
