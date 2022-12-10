let i = 0, speed = 50;
let txt = "Saurabh Maurya";
let txt2 = "Hi There, I’m Saurabh Maurya and I am a Full Stack Web Developer. It has been 2 years, I’m working on web development and since then I have worked with several web technologies. I am doing my graduation in Electronics Engineering. My Skill Set : HTML5, CSS3, JavaScript, ReactJS, Django."

let Intro = document.getElementById("intro");
let Name = document.getElementById("name");
let headings = document.getElementsByClassName("tools-and-technologies");
let footer = document.getElementsByClassName("text-footer");
let navBar = document.getElementById("navBar");
let navitems = document.getElementsByClassName("nav-link");
let bullets = document.getElementsByClassName("colorRepresentation");

let ids = ['1','2','3','4','5','6','7','8'];
let changed = false;

let navbarDiv = document.getElementById('navbarNavDropdown').firstChild.nextSibling;
let colorsDiv = document.getElementById('color');
let technoClass = document.querySelector('.web-technologies');
let websitesDiv = document.getElementById("myProjects").firstChild.nextSibling.nextSibling.nextSibling;
let contactSection = document.querySelector('.contactsection');

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

function changeVisibility(){
    for(let i=0; i<colors.length; i++){
        bullets[i].style.backgroundColor = colors[i];
    }
    if(colorsDiv.style.visibility == "visible"){ 
        colorsDiv.style.visibility = "hidden";
    }
    else
        colorsDiv.style.visibility = "visible";
}

function changeColor(c){
    document.getElementById("profile_pic").style.borderColor = c;
}

function darkmode(){
    if(changed === false){
        document.body.style.backgroundColor = "#222";
        Name.style.color = "white";
        Intro.style.color = "white";
        for(let i=0; i<headings.length; i++) 
            headings[i].style.color = "white";
        footer[0].style.color = "white";
        navBar.className = "navbar navbar-expand-lg fixed-top bg-dark";
        for(let i=0; i<navitems.length; i++)
            navitems[i].style.color = "white";
        document.querySelector(".navbar-brand").style.color = "white";
        document.querySelector('.active').style.borderColor = "white";
        changed = true;
    }else{
        document.body.style.backgroundColor = "white";
        Name.style.color = "black";
        Intro.style.color = "black";
        for(let i=0; i<headings.length; i++) 
            headings[i].style.color = "black";
        footer[0].style.color = "black";
        navBar.className = "navbar navbar-expand-lg fixed-top bg-light";

        for(let i=0; i<navitems.length; i++)
            navitems[i].style.color = "black";
        document.querySelector(".navbar-brand").style.color = "black";
        document.querySelector('.active').style.borderColor = "black";
        changed = false;
    }
}

function changeVis(id){
    for(let i=0; i<ids.length; i++){
        if(ids[i] == id){
            document.getElementById(ids[i]).style.opacity = "1";
        }else{
            document.getElementById(ids[i]).style.opacity = "0.3";
        }
    }
}

function normalise(){
    for(let i=0; i<ids.length; i++){
        document.getElementById(ids[i]).style.opacity = "1";
    }
}

$(document).ready(function () {
  
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        let target = this.hash,
            menu = target;

        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 20, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $(document).on("scroll", onScroll);
});

function onScroll(event){
    let scrollPos = $(document).scrollTop();
    $('#navbarNavDropdown a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 400 && refElement.position().top + refElement.height() > scrollPos + 400) {
            $('#navbarNavDropdown ul li a').removeClass("active");
            currLink.addClass("active");
            if(changed == true){
                currLink[0].style.borderColor = "white";
            }
        }
        else{
            currLink.removeClass("active");
        }
    });
}

loadNavbar();
function loadNavbar(){
    for(let i=0; i<pages.length; i++){
        let page = pages[i];
        navbarDiv.innerHTML += `
        <li class="nav-item">
            <a class="nav-link" href="${page.link}">${page.name}</a>
        </li>`;

        if(page.name == "About me"){
            navbarDiv.firstChild.nextSibling.firstChild.nextSibling.className += ' active';
        }
    }
    navbarDiv.innerHTML += `           
    <img id="light-dark-mode" src="static/darkmode.png" alt="dark-mode" onclick = "darkmode()">`;
}

loadColors();
function loadColors(){
    for(let i=0; i<colors.length; i++){
        colorsDiv.innerHTML += `<span class = "colorRepresentation" onclick = "changeColor('${colors[i]}');"></span>`
    }
}

loadTechnologies();
function loadTechnologies(){
    for(let i=0; i<technologies.length; i++){
        technoClass.innerHTML += `<img class = "tech" src="static/${technologies[i]}.png" alt="${technologies[i]}">`;
    }
}

loadWebsites();
function loadWebsites() {
    for(let i=0; i<websites.length; i++){
        website = websites[i];
        websitesDiv.innerHTML += `
        <div class="col-sm-3 project-items" id = "${website.id}" onmouseover = "changeVis(${website.id})" onmouseout = "normalise()">
            <div class="card">
                <div class="card-body">
                    <img class = "projects" src="static/${website.name}.png" alt="${website.name}">
                    <h5 class="card-title">${website.title}</h5>
                    <p class="card-text">${website.text}</p>
                    <a href="${website.link}" class="btn btn-primary" target = "_new">Go to project</a>
                    <a href=${website.github} target="_new">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg> 
                    </a>
                </div>
            </div>
        </div>`
    }
}

loadContacts();
function loadContacts(){
    for(let i=0; i<contacts.length; i++){
        let contact = contacts[i];
        contactSection.innerHTML += `
        <a href="${contact.link}" target="_new">
            <div class="thumbnail2"><img src="static/${contact.name}.jpg" alt="image not loaded" title="${contact.name}"></div>
        </a>`
    }
}