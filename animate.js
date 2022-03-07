function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("link-terminal").style.marginLeft = "250px";
    document.getElementById("works-cited").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("link-terminal").style.marginLeft = "0";
    document.getElementById("works-cited").style.marginLeft = "0";
    
}

const sliders = document.querySelectorAll('.slide-in');
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold:0,
    rootMargin: "0px 0px 600px 0px"
};