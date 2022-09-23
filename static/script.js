// document.body.style.backgroundColor = 'black';
function darkmode() {
    // DARKMODE
    // localStorage.setItem("theme", "DARK");

    document.querySelector('ul.nav li').style.color = "white";
    for (let i = 0; i < document.querySelectorAll('ul.nav li a').length; i++) {
        document.querySelectorAll('ul.nav li a')[i].style.color = "white";
    }
    // change general background color to black
    document.querySelector('body').style.backgroundImage = "url('photos/ina_yakiniku_night_sky.png')";
    document.querySelector('header').style.background = 'rgba(9, 44, 62, 0.975)';
    document.querySelector('footer').style.background = 'rgba(9, 44, 62, 0.975)';
    document.querySelector('footer').style.color = 'white';
    // projects part
    for (let i = 0; i < document.querySelectorAll('#projects_list .project').length; i++) {
        document.querySelectorAll('#projects_list .project_head')[i].style.background = 'black';
        document.querySelectorAll('#projects_list .project')[i].style.color = "white";
    }
}
function lightmode() {
   // LIGHTMODE

   document.querySelector('header').style.backgroundColor = 'rgba(234, 210, 171, 0.975)'
   document.querySelector('body').style.backgroundImage = "url('photos/ina_yakiniku.jpg')";
   document.querySelector('ul.nav li').style.color = "black";
   for (let i = 0; i < document.querySelectorAll('ul.nav li a').length; i++) {
       document.querySelectorAll('ul.nav li a')[i].style.color = "black";
   }
   document.querySelector('footer').style.background = 'rgba(234, 210, 171, 0.975)';
   document.querySelector('footer').style.color = 'grey';
   for (let i = 0; i < document.querySelectorAll('#projects_list .project').length; i++) {
       document.querySelectorAll('#projects_list .project_head')[i].style.background = '#efefef';
       document.querySelectorAll('#projects_list .project')[i].style.color = 'black';
   }
}

const checkbox = document.querySelector("#darkmode");
// let button = document.querySelector("#button");

// add event listener to checkbox and change the header background color to black
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        localStorage.setItem("theme", "DARK");
        darkmode();
    } else {
        localStorage.setItem("theme", "LIGHT");
        lightmode();
    }
});

// set local storage so that it stays the same even after reloading
if (localStorage.getItem("theme") == null) {
localStorage.setItem("theme", "LIGHT");
}
let localData = localStorage.getItem("theme");

if (localData == "LIGHT") {
    lightmode();
    // checkbox.checked = false;
} 
else {
    darkmode();
    // checkbox.checked = true;
}

