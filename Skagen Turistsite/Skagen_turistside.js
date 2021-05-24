// Når man trykker på "Måde Mode", skift baggrunden til måger
document.getElementById("mågeMode").addEventListener("click", function(){
    document.body.style.backgroundImage = "url('måger.jpg')";
});

// Når man trykker på "Dark mode", gør baggrunden sort og ændrer det der står i knappen.
document.getElementById("darkMode").addEventListener("click", function(){
    document.body.style.background = "black";
});
// Skift tilbage til normal baggrund
document.getElementById("plainMode").addEventListener("click", function(){
    document.body.style.background = "deepskyblue";
});

const fyr = document.querySelector("#vippefyr");
const kirke = document.querySelector("#tilsand");
const museum = document.querySelector("#museum");

// skift billede af vippefyret når man klikker
function skiftVippefyr() {
    if (fyr.src === "https://upload.wikimedia.org/wikipedia/commons/6/6f/Bascule-ight-Skagen.jpg") {
        fyr.src = "vipfyr.jpg";
    } else {
        fyr.src = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Bascule-ight-Skagen.jpg";
    }
}

fyr.addEventListener("click", skiftVippefyr);

// skift billede af kirken når man klikker
function skiftKirke() {
    if (kirke.src === "https://d2wgp4u47gi6he.cloudfront.net/imageCache/images/articles/6281_Crop_750_600.jpg") {
        kirke.src = "kirken.jpg";
    } else {
        kirke.src = "https://d2wgp4u47gi6he.cloudfront.net/imageCache/images/articles/6281_Crop_750_600.jpg";
    }
}

kirke.addEventListener("click", skiftKirke);

// skift billede af museumet når man klikker
function skiftMuseum() {
    if (museum.src === "https://upload.wikimedia.org/wikipedia/commons/7/7f/Skagen_Museum%2C_Indgang.jpg") {
        museum.src = "museum.jpg";
    } else {
        museum.src = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Skagen_Museum%2C_Indgang.jpg";
    }
}

museum.addEventListener("click", skiftMuseum);

// gem videoen til man trykker
const video = document.querySelector("#topOfDenmark");
const headline = document.querySelector("#videoHeadline");
video.style.display = "none";
function visVideo(){
    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}
headline.addEventListener("click", () => visVideo());