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
document.querySelector(".link.list").classList.add("invisible");
document.querySelector(".link.list").classList.remove("invisible");
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
