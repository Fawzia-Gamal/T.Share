// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// login
var modal = document.getElementById('login');

// When the user clicks anywhere outside, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//add-item
var modal = document.getElementById('Add-Item');

// When the user clicks anywhere outside, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Signup
var modal = document.getElementById('SignUp');

// When the user clicks anywhere outside, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()  =>{
        nav.classList.add('active');
    })
};

if(close){
    close.addEventListener('click', ()  =>{
        nav.classList.remove('active');
    })
};

//search iteam
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".pro"); 
    const pname = storeitems.getElementsByTagName("span"); 

    for (var i = 0 ; i < pname.length ; i++) {
        let match = product[i].getElementsByTagName('span')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML ;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else {
                product[i].style.display = "none" ;
            }
        }

    }
}
