// document.body.style.backgroundColor = 'black';



const checkbox = document.querySelector("#darkmode");
let button = document.querySelector("#button");





// Add darkmode button

// const dbli = document.createElement("li");
// dbli.classList.add("darkmode");
// dbli.appendChild(document.createElement("form"));
// dbli.querySelector("form").appendChild(document.createElement("label"));
// dbli.querySelector("label").appendChild(document.createElement("input"));
// dbli.querySelector("label").appendChild(document.createElement("span"));
// // dbli.innerHTML = "
// // <form>\
// // <label>\
// //     <input>\
// //     <span></span>\
// // </label>\
// // </form>\"
// document.querySelector(".nav").appendChild(dbli);
// document.querySelector("label input").type = "checkbox";
// document.querySelector("label input").id = "darkmode";
// document.querySelector("label span").classList.add("check");



// add event listener to checkbox and change the header background color to black
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        document.querySelector('header').style.background = 'rgba(9, 44, 62, 0.975)';
        document.querySelector('ul.nav li').style.color = "white";
        for (let i = 0; i < document.querySelectorAll('ul.nav li a').length; i++) {
            document.querySelectorAll('ul.nav li a')[i].style.color = "white";
        }
        document.querySelector('body').style.backgroundImage = "url('photos/ina_yakiniku_night_sky.png')";
        document.querySelector('footer').style.background = 'rgba(9, 44, 62, 0.975)';
        document.querySelector('footer').style.color = 'white';

    } else {
        document.querySelector('header').style.backgroundColor = 'rgba(234, 210, 171, 0.975)'
        document.querySelector('body').style.backgroundImage = "url('photos/ina_yakiniku.jpg')";
        document.querySelector('ul.nav li').style.color = "black";
        for (let i = 0; i < document.querySelectorAll('ul.nav li a').length; i++) {
            document.querySelectorAll('ul.nav li a')[i].style.color = "black";
        }
        document.querySelector('footer').style.background = 'rgba(234, 210, 171, 0.975)';
        document.querySelector('footer').style.color = 'grey';
    }
});
// function eventHandler(event){
//     button.addEventListener('click', function() {
//         if (checkbox.checked) {
//             document.querySelector('body').style.backgroundColor = 'black';
//         } else {
//             document.querySelector('body').style.backgroundColor = 'red';
//         }
//     })
// }

// function myFunction() {
//     // change body background to red
//     document.body.style.backgroundColor = 'red';
// }