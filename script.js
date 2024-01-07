function nextPage() {
  window.location.href = "yesPage.html";
}
function previousPage(){
    window.location.href = "index.html";
}
function moveButton() {
  var button = document.getElementById("noButton");

  var maxX = window.innerWidth - button.offsetWidth - 250;
  var maxY = window.innerHeight - button.offsetHeight - 250;

  var x = Math.random() * maxX;
  var y = Math.random() * maxY;

  // Ограничиваем координаты, чтобы кнопка не выходила за пределы экрана
  x = Math.max(x, 0); // не меньше 0
  y = Math.max(y, 0); // не меньше 0
  x = Math.min(x, maxX); // не больше maxX
  y = Math.min(y, maxY); // не больше maxY

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
