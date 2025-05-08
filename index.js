alert("Siz son yozing, men uni toq yoki juftligini tekshiramiz");
let son = prompt("Sonni kiriting");

// sonni raqamga aylantirish
son = Number(son);

if (isNaN(son)) {
    alert("Bu son emas");
} else if (son === 0) {
    alert("Bu son emas");
} else if (son % 2 === 0) {
    alert("Juft son");
} else {
    alert("Toq son");
}