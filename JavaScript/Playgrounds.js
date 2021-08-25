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
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false
  // and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false
  // and condition2 is false
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
