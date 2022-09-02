var i = 0;
var txt = "Saurabh Maurya";
var txt2 = "Hi There, I’m Saurabh Maurya and I am a Full Stack Web Developer. It has been 1.5 years, I’m working on web development and since then I have worked with several web technologies. I am doing my graduation in Electronics Engineering. My Skill Set : HTML5, CSS3, JavaScript, ReactJS, Django."
var speed = 50;

var Intro = document.getElementById("intro");
var Name = document.getElementById("name");
var headings = document.getElementsByClassName("tools-and-technologies");
var footer = document.getElementsByClassName("text-footer");
var navBar = document.getElementById("navBar");
var navitems = document.getElementsByClassName("nav-link");

typeWriter();

function typeWriter() {
    if (i < txt.length) {
        Name.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    else{
        Intro.innerHTML += txt2.charAt(i - txt.length);
        i++;
        setTimeout(typeWriter, speed);
    }
}

colour = document.getElementById("color");
bullets = document.getElementsByClassName("colorRepresentation");
colorList = ["red", "black", "blue", "yellow", "orange", "pink"];
function changeVisibility(){
    for(var i=0; i<colorList.length; i++){
        bullets[i].style.backgroundColor = colorList[i];
    }
    if(colour.style.visibility == "visible"){ 
        colour.style.visibility = "hidden";
    }
    else
        colour.style.visibility = "visible";
}

function changeColor(c){
    document.getElementById("aboutMe").style.borderColor = c;
}

function darkmode(){
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "#222";
        Name.style.color = "white";
        Intro.style.color = "white";
        for(var i=0; i<headings.length; i++) 
            headings[i].style.color = "white";
        footer[0].style.color = "white";
        navBar.className = "navbar navbar-expand-lg fixed-top bg-dark";
        for(var i=0; i<navitems.length; i++)
            navitems[i].style.color = "white";
        document.querySelector(".navbar-brand").style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
        Name.style.color = "black";
        Intro.style.color = "black";
        for(var i=0; i<headings.length; i++) 
            headings[i].style.color = "black";
        footer[0].style.color = "black";
        navBar.className = "navbar navbar-expand-lg fixed-top bg-light";
        for(var i=0; i<navitems.length; i++)
            navitems[i].style.color = "black";
        document.querySelector(".navbar-brand").style.color = "black";
    }
}