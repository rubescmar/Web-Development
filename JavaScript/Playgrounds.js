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

//Switch statement
switch (expr) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
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

/*addEventListener is a method that listens to an specific event which
can be looked up with MDN Docs*/
document.getElementsByClassName("btn")[0].addEventListener("click", "function")

/* Higher order functions are functions that can take other functions as an
input*/
function add (num1, num2) {
  return num1 + num2;
}
function higherOrderFunction (num1, num2, operator) {
  return operator (num1, num2);
}
higherOrderFunction(3, 4, add) //7

/*With modern browsers you can call the function debugger at the JS console
before a function to see how the browser manages that function and discern
posible malfunctions*/
debugger;
function add (num1, num2) {
  return num1 + num2;
}
function higherOrderFunction (num1, num2, operator) {
  return operator (num1, num2);
}
higherOrderFunction(3, 4, add)

//this refers to the object that is doing the functions
this.innerHTML = "hello";

//JS objects
var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermise: true,
  languages: ["French", "English"]
}
bellBoy1.hasWorkPermise; //true

//Constructor functions (first letter is CAPITALIZED)
function BellBoy (name, age, hasWorkPermise, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermise = hasWorkPermise;
  this.languages = languages;
  this.acknowledge = function () {
    alert("I will do it right away, sir!");
  }
}
var bellBoy1 = new BellBoy ("Timmy", 16, true, ["spanish", "english"]);
console.log(bellBoy1.age);//16
bellBoy1.acknowledge()//calls the method

//Callback Functions
document.addEventListener("keydown", function(/*event*/) {
  console.log(event.key)//that's a callback
});

//jquery

//$ = document.querySelector, css methods calls for changes in the css,
//the first string refers to the property and the second to the value.
$("h1").css("color", "green");

//you can add and remove classes with jquery too
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

//You can add or remove multiple classes too
$("h1").addClass("big-title margin-50");

//Or ask if it has the class implied
$("h1").hasClass("margin-50");

//Manipulating text with jQuery
$("h1").text("all the text gets changed to this");
$("h1").html("<em>all the text gets changed to this</em>");

//Manipulating attributes with jQuery
$("h1").attr("class", "big-title");

//Adding events listeners, you don't have too add a loop here to implement
//an event listener through all the selectors
$("h1").click(function() {
  $("h1").css("color" , "red");
});
$("h1").on("typeOfEvent", function(event) {
  $("h1").text(event.key);
}); //The events you can look for in MDN Docs

//Change an h1 through key pressed
$(document).keypress(function(event) {
  $("h1").text(event.key);
});

//Creating html elements through jQuery
$("h1").before("<button>Click Me!</button>"); //before the tag h1
$("h1").after("<button>Click Me!</button>"); //after the tag h1
$("h1").prepend("<button>Click Me!</button>"); //Inside the h1 at the beginning
$("h1").append("<button>Click Me!</button>"); //Inside the h1 at the end

//Removing html elements
$("h1").remove();

//Hiding/showing elements
.hide()
.show()
.toggle()
.fadeIn()
.fadeOut()
.fadeToggle()
.slideup()
.slideDown()
.slideToggle()
