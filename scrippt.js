
function calculateAge(name, birthYear, currentYear) {
    var age = currentYear - birthYear;
    return name + ", Ваш возраст " + age;
}

var name = prompt("Введите ваше имя:");
var birthYear = +prompt("Введите год вашего рождения:");
var currentYear = +prompt("Введите текущий год:");

var result = calculateAge(name, birthYear, currentYear);
alert(result);
