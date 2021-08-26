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
