let links = document.getElementsByClassName('links')[0];
let ul = document.getElementsByTagName('ul')[0];


links.addEventListener("click" , function(){
    ul.classList.toggle('i');
} )