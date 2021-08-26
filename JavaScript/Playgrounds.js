// Esto es un ejemplo de como usar un prompt para pedir al usuario que
// introduzca una variable que luego vamos a procesar, aquí usamos slice(),
// length(), toUpperCase(), toLowerCase() y la concatenación para,
// independientemente de como lo escriban, devolver el nombre con la inicial
// en mayúscula y el resto en minúsculas.
var name = prompt("Buenos días, mi nombre es Rubén, ¿cómo te llamas?");
alert("Es un placer conocerte, " + name.slice(0, 1).toUpperCase() +
  name.slice(1, name.length).toLowerCase() + ".");

// Esto es un ejemplo de operadores en javascript:
6+3 /* sumar(+) */
6-3 /* restar(-) */
6*2 /* multiplicar(*) */
6/4 /* dividir(/) */
6%4 /* módulo de división(%) */
6++ /* incrementar 1(++) */
6-- /* decrecer 1(--) */
6+=2 /* incrementar x(+=) */
6-=2 /* decrecer x(-=) */
6*=3 /* multiplicar por x(*=) */
6/=3 /* dividir por x(/=) */

// Esto es un script que utiliza operadores para procesar un input
// humano y dar un resultado.
const dogAge = prompt("¿Que edad tiene tu perro?");
var humanAge = (dogAge-2)*4+21;
alert("Si fuera un humano, tu perro tendría " + humanAge + ".");

//Funciones en javascript
function firstCapitalized(name) {
  const firstCharacter = name.slice(0, 1).toUpperCase();
  const restOfName = name.slice(1, name.length).toLowerCase();
  const finalName = firstCharacter + restOfName;
  console.log(finalName);
  return finalName;
}
firstCapitalized("alBertO"); /* Daría como resultado Alberto */

//Esto es un ejmplo de un script para tirar dados usando Math.random (genera
// un número aleatorio entre 0 y 0.9999999999999999) y Math.floor (truncar)
// o Math.round (redondear).

function rollDice() {
  var n = Math.random();
  n = Math.floor(n * 6) + 1;
  return n;
}
rollDice()

// Comparativos en JS
=== //Igual a
==  //Igual a pero da igual que sean distintos tipos de datos o mayusculas
!== //Distinto a
>   //Mayor a
<   //Menor a
>=  //Mayor o igual a
<=  //Menor o igual a
&&  //AND
||  //OR
!   //NOT

//Control de flujo en JS
//If, else if, else Condition
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false
  // and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false
  // and condition2 is false
}

//While Loop
while (i < 10) {
  console.log("The number is " + i);
  i++;
}

//For Loop
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

//Arrays en JS
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList.length);  //6
console.log(guestList[0]);      //Angela
guestList.includes("Jack");     //true

/*Script que saluda a invitados y niega la entrada a no invitados,
en primer lugar pegamos el script para devolver un nombre escrito
sin tener en cuenta mayúsculas y minúsculas porque array.includes
necesita que el nombre sea identico*/
function firstCapitalized(name) {
  const firstCharacter = name.slice(0, 1).toUpperCase();
  const restOfName = name.slice(1, name.length).toLowerCase();
  const finalName = firstCharacter + restOfName;
  console.log(finalName);
  return finalName;
}

const guestPermited = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
const asker = prompt("Welcome to the party!, What's your name?");
if (guestPermited.includes(firstCapitalized(asker))) {
    alert("Welcome to the party " + firstCapitalized(asker) + "!");
} else {
    alert("I'm sorry you don't seem to be included in our guest list.")
}

//Who pays today
function whosPaying(names) {
    var pays = Math.floor(Math.random() * names.length);
    return names[pays] + " is going to buy lunch today!";
}
whosPaying(["angela", "ben", "jenny", "michael", "chloe"])

//Secuencia de Fibonacci
function fibonacciGenerator (n) {
    var output = [];
    for (var i = 0; i < n; i++) {
       if (i < 2) {
            output.push(i);
        } else {
            output.push(output[i-2] + output[i-1]);
        }
    }
    return output;
}
fibonacciGenerator(15)

//Document Object Model (DOM). JS Playground.

//Selecting objects from the document
var checkBox = document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling;
var heading = document.querySelector('h1');
var lastUlItem = document.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.lastElementChild;

//You can change properties or call methods through the DOM
heading.style.color = "red";
checkBox.click();
lastUlItem.innerHTML = "This was changed through JS";

//getElementsBy... gives an array with all the found items
document.getElementsByTagName("li")[1].style.color = "green";
document.getElementsByClassName("btn")[0].style.backgroundColor = "green";

//However getElementById gives an object and not an array
document.getElementById("botoncito").style.color = "white";

/*document.querySelector('...') is a bit more special due to using selectors,
selector are what we use in css BEFORE the brackets, and you can combine
them as well just as you can with CSS, so it is more powerfull.
When combining selector you have to know that same hierarquical selectors
dont have a space in between, and diferent hierarquical selectors you
have to specify the higher one first, then a space, then the Second.
document.querySelectorAll gives you an array instead of an specific object*/
document.querySelector(".link.list").style.backgroundColor = "pink";
document.querySelector("li a").style.backgroundColor = "yellow";
console.log(document.querySelectorAll('a'));

/*Until now we have been directly changing the style of the document through
JS, but that is not Best Practices, we should stick to HTML to content,
CSS to style and JS for interactivity as much as we can, thats why this
is so important, you can add or remove classes through JS so it gets recognized
from de CSS selector and get the style applied*/
document.querySelector(".link").classList.add("invisible");
document.querySelector(".link").classList.remove("invisible");
document.querySelector(".link.list").classList.toggle("invisible"); //add/remove

/*There are diferences between .innerHTML and .textContent. The first one
refers to everything in between the tags refered, the other to only the text.
So with the first one we change inner tags too, this means tha we can apply
innertags too.*/
document.getElementsByClassName("btn")[0].textContent = "JS textContent changed";
lastUlItem.innerHTML = "<em>JS innerHTML changed, including em tag</em>";

//After text and style, now is the turn to attributes
console.log(document.querySelector("#googleLink").attributes);
console.log(document.querySelector("#googleLink").getAttribute("href"));
document.querySelector("#googleLink").setAttribute("href", "https://www.bing.es");
