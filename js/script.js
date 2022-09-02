var i = 0;
var txt = "Saurabh Maurya";
var txt2 = "Hi There, I’m Saurabh Maurya and I am a Full Stack Web Developer. It has been 1.5 years, I’m working on web development and since then I have worked with several web technologies. I am doing my graduation in Electronics Engineering. My Skill Set : HTML5, CSS3, JavaScript, ReactJS, Django."
var speed = 50;

var Intro = document.getElementById("intro");
var Name = document.getElementById("name");

typeWriter();

function typeWriter() {
    console.log("called");
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