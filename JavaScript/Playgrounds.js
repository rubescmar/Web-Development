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
  console.log(firstCharacter + restOfName);
}
firstCapitalized("alBertO"); /* Daría como resultado Alberto */

//Siguiente Sección
