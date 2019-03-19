
let age = document.getElementById('age');
let obj = {};
obj.value = 30;
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	console.log(age.value);
}
showUser.call(obj,'Иван','Петров');

