var i = 0
var images = []
var slideTime = 6000
var background = document.querySelector(".hero")

images[0] = "./assets/Images/Copenhaguen-Photo.jpeg";
images[1] = "./assets/Images/Berlin-Photo.jpg";
images[2] = "./assets/Images/Bacalar-Photo.jpeg";

function changeBackground(){
    background.style.backgroundImage = "url(" + images[i] +")";
    
    if (i < images.length - 1){
        i++;
    } else {
        i = 0
    }
    setTimeout(changeBackground,slideTime)
}

window.onload = changeBackground