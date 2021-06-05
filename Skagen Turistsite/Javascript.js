// Skift billede når man trykker på pilene
const leftArrow = document.querySelector(".leftarrow");
const rightArrow = document.querySelector(".rightarrow");

const background = document.querySelector(".grid2");
background.style.backgroundImage = "url('museum.jpg')";

rightArrow.addEventListener("click", changeImageRight);
leftArrow.addEventListener("click", changeImageLeft);

function changeImageRight(){
    if (background.style.backgroundImage === 'url("museum.jpg")'){
        background.style.backgroundImage = "url('centrum.jpeg')";
    } else if (background.style.backgroundImage === 'url("centrum.jpeg")') {
        background.style.backgroundImage = 'url("hus.jpg")';
    } else {
        background.style.backgroundImage = 'url("museum.jpg")';
    }
};

function changeImageLeft(){
    if (background.style.backgroundImage === 'url("museum.jpg")'){
        background.style.backgroundImage = "url('hus.jpg')";
    } else if (background.style.backgroundImage === 'url("hus.jpg")'){
        background.style.backgroundImage = 'url("centrum.jpeg")';
    } else {
        background.style.backgroundImage = 'url("museum.jpg")';
    }
}

//pileskift slut

// Skift baggrund start

const mågeMode = document.querySelector("#mågeMode");
const darkMode = document.querySelector("#darkMode");
const plainMode = document.querySelector("#plainMode");

const bodyBackground = document.querySelector("#background");
mågeMode.addEventListener("click", changeBackgroundMåger);
darkMode.addEventListener("click", changeBackgroundDark);
plainMode.addEventListener("click", changeBackgroundPlain);

function changeBackgroundMåger(){
     bodyBackground.style.backgroundImage = "url('måger.jpg')";
}

function changeBackgroundDark(){
    bodyBackground.style.background = "black";
}

function changeBackgroundPlain(){
    bodyBackground.style.background = "deepskyblue";
}

// Skift baggrund slut

// collapse content når banner trykkes på
const banner1 = document.querySelector("#banner1");
const banner2 = document.querySelector("#banner2");
const banner3 = document.querySelector("#banner3");
const banner4 = document.querySelector("#banner4");
const banner5 = document.querySelector("#banner5");
const banner6 = document.querySelector("#banner6");
const banner7 = document.querySelector("#banner7");
const banner8 = document.querySelector("#banner8");

const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");
const arrow4 = document.querySelector("#arrow4");
const arrow5 = document.querySelector("#arrow5");
const arrow6 = document.querySelector("#arrow6");
const arrow7 = document.querySelector("#arrow7");
const arrow8 = document.querySelector("#arrow8");


const banner1Content = document.querySelector("#banner1Content");
const banner2Content = document.querySelector("#banner2Content");
const banner3Content = document.querySelector("#banner3Content");
const banner4Content = document.querySelector("#banner4Content");
const banner5Content = document.querySelector("#maps");
const banner6Content = document.querySelector("#rejseplanen");
const banner7Content = document.querySelector(".links");
const banner8Content = document.querySelector("#topDanmark");

banner1.addEventListener("click", collaps1);
banner2.addEventListener("click", collaps2);
banner3.addEventListener("click", collaps3);
banner4.addEventListener("click", collaps4);
banner5.addEventListener("click", collaps5);
banner6.addEventListener("click", collaps6);
banner7.addEventListener("click", collaps7);
banner8.addEventListener("click", collaps8);

function collaps1(){
    if (banner1Content.style.display === "none"){
        banner1Content.style.display = "grid";
        arrow1.className = "fas fa-arrow-circle-down";
    } else {
        banner1Content.style.display = "none";
        arrow1.className = "fas fa-arrow-circle-up";
    }
};

function collaps2(){
    if (banner2Content.style.display === "none"){
        banner2Content.style.display = "grid";
        arrow2.className = "fas fa-arrow-circle-down";
    } else {
        banner2Content.style.display = "none";
        arrow2.className = "fas fa-arrow-circle-up";
    }
};

function collaps3(){
    if (banner3Content.style.display === "none"){
        banner3Content.style.display = "grid";
        arrow3.className = "fas fa-arrow-circle-down";
    } else {
        banner3Content.style.display = "none";
        arrow3.className = "fas fa-arrow-circle-up";
    }
};

function collaps4(){
    if (banner4Content.style.display === "none"){
        banner4Content.style.display = "grid";
        arrow4.className = "fas fa-arrow-circle-down";
    } else {
        banner4Content.style.display = "none";
        arrow4.className = "fas fa-arrow-circle-up";
    }
};

function collaps5(){
    if (banner5Content.style.display === "none"){
        banner5Content.style.display = "grid";
        arrow5.className = "fas fa-arrow-circle-down";
    } else {
        banner5Content.style.display = "none";
        arrow5.className = "fas fa-arrow-circle-up";
    }
};

function collaps6(){
    if (banner6Content.style.display === "none"){
        banner6Content.style.display = "grid";
        arrow6.className = "fas fa-arrow-circle-down";
    } else {
        banner6Content.style.display = "none";
        arrow6.className = "fas fa-arrow-circle-up";
    }
};

function collaps7(){
    if (banner7Content.style.display === "none"){
        banner7Content.style.display = "grid";
        arrow7.className = "fas fa-arrow-circle-down";
    } else {
        banner7Content.style.display = "none";
        arrow7.className = "fas fa-arrow-circle-up";
    }
};

function collaps8(){
    if (banner8Content.style.display === "none"){
        banner8Content.style.display = "grid";
        arrow8.className = "fas fa-arrow-circle-down";
    } else {
        banner8Content.style.display = "none";
        arrow8.className = "fas fa-arrow-circle-up";
    }
};
// Banner collapse slut