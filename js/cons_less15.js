"use strict";

// let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(arr.join(", "));
// console.log(arr.toString());
// //вызов прототипа
// console.log(arr.__proto__);
// //получить тоже самое
// console.log(Array.prototype);
// //сравнение прототипов
// console.log(arr.__proto__ === Array.prototype);
//первый пример прототипирования
// const man = {
//   hands: 2,
//   lags: 2,
//   eyes: 2,
//   walk: function () {
//     console.log("я хожу");
//   },
//   talk: function () {
//     console.log("Я говорю");
//   },
// };

// const newMan = Object.create(man);
// const newWoman = Object.create(man);

// // newMan.walk();
// // newMan.talk();

// newMan.name = "Ivan";
// newMan.age = 23;

// newWoman.name = "Anna";
// newWoman.age = 22;

// console.log(newMan);
// console.log(newWoman);

//более серьезный пример
// const worker = {
//   workplace: 1,
//   dinner: 1,
//   goToWork: function () {
//     console.log("Иду на работу");
//   },
//   leaveWork: function () {
//     console.log("Ухожу с работы");
//   },
//   work: function () {
//     console.log("Работаю");
//   },
//   sayHello: function () {
//     console.log("Привет, меня зовут " + this.name);
//   },
// };

// const frontEndDev = Object.create(worker);
// const backEndDev = Object.create(worker);

// frontEndDev.dinner = 2;
// frontEndDev.role = "Frond End Developer";
// backEndDev.role = "Back End Developer";

// frontEndDev.work = function () {
//   console.log("Пишу качественный фронт, кушаю печеньки!");
// };

// backEndDev.work = function () {
//   console.log("Мучаюсь с базами данных, дайте выходной");
// };

// frontEndDev.work();
// backEndDev.work();

// console.log(frontEndDev);
// console.log(backEndDev);

// const developer1 = Object.create(frontEndDev);
// const developer2 = Object.create(frontEndDev);
// const developer3 = Object.create(backEndDev);
// const developer4 = Object.create(backEndDev);

// developer1.name = "Alex";
// developer2.name = "Ivan";
// developer3.name = "Anna";
// developer4.name = "Elena";

// developer1.sayHello();
// developer2.sayHello();
// developer3.sayHello();
// developer4.sayHello();

//смотрим разные обеды у разрабов
// console.log(developer1.dinner);
// console.log(developer2.dinner);
// console.log(developer3.dinner);
// console.log(developer4.dinner);

// //проверка наличия свойства у данного обьекта игнорируя его прототипы
// console.log(developer1.hasOwnProperty("name")); //true
// console.log(developer1.hasOwnProperty("role")); //false

// //но если дотянуться через прототип
// console.log(developer1.__proto__.hasOwnProperty("role")); //false

// //проверка в прототипе ниже по уровню, хрен пойми зачем
// console.log(developer1.__proto__.__proto__.hasOwnProperty("role")); //false

// //является ли 1 обьект пртотипом др обьекта
// console.log(frontEndDev.isPrototypeOf(developer1)); //true
// console.log(frontEndDev.isPrototypeOf(developer3)); //false

//3 обеьекта лежали на столе
// const person1 = {
//   name: "Vlad",
// };

// const person2 = {
//   name: "Alex",
// };

// const person3 = {
//   name: "Ivan",
// };

//создаем их же с помощью конструктора c оператором New для создания новой сущности
// const Person = function (name) {
//   this.name = name;
// };

// //обычные функции с маленькой, ф-конструкторы с большой буквы
// const person1 = new Person("Vlad");
// const person2 = new Person("Alex");
// const person3 = new Person("Ivan");
// //можно и так
// const person4 = new Person();

// console.log(person1); //name:'присвоенное'
// console.log(person2); //name:'присвоенное'
// console.log(person3); //name:'присвоенное'
// console.log(person4); //name:'undefined'

// const person5 = {
//   name: "Anna",
// };
// console.log(person5); //name:'присвоенное'
// //у Анны нет конструктора и нельзя добавлять собственные методы

// //можно как отдельно добавлять метод
// Person.prototype.sayHello = function () {
//   console.log("Привет, меня зовут " + this.name);
// };

// //так и добавить его сразу в конструкторе тогда он будет принадлежать не прототипу а самому обьекту. это лучший путь тк есть доступ к скрытым переменным
// const Person2 = function (name) {
//   this.name = name;
//   this.sayHello = function () {
//     console.log("Привет, меня зовут " + this.name);
//   };
// };

// //person1.sayHello(); //Привет, меня зовут Vlad

// const Person3 = function (name) {
//   this.name = name;
//   const age = 33;
//   this.sayHello = function () {
//     console.log("Привет, меня зовут " + this.name);
//     console.log("Мне " + age + " года!");
//   };
// };

// const person6 = new Person3("Vlad");
// const person7 = new Person3("Anna");
// person6.sayHello();
// console.log(person6);
// console.log(person6.age); //undefined тк скрыто

// //минус у каждого свой метод и они не будут равны
// console.log(person6.sayHello === person7.sayHello); //false
//а если создать через прототип то методы будут одинаковые и навешивение метода на прототип + к производительности но без скрытых переменных в конструкторе

//рекомендованный вариант
const Person = function (name) {
  this.name = name;
};

Person.prototype.sayHello = function () {
  console.log("Привет, меня зовут " + this.name);
};

const person1 = new Person("Vlad");

console.log(Person.prototype.isPrototypeOf(person1)); //true //неудобно, поэтому

console.log(person1 instanceof Person); //зависит ли person1 от конструктора Person - true

//пример цепочки наследований
const Student = function (name, role) {
  Person.call(this, name);
  this.role = role;
};
//из прототипа персона наследуется прототип студента
//юез этой строчки мы не знаем про sayHEllo из персоны
Student.prototype = Object.create(Person.prototype);
//создаем конструктор для прототипа Student
Student.prototype.constructor = Student;
//из пртототипа студента наследуется каждый новый студент
const newStudent = new Student("Vlad", "student");

console.log(newStudent);
console.log(newStudent.sayHello());
