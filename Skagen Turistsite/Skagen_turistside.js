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
