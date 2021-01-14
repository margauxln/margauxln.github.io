//ANIMATE BIKE
var image_tracker='piedDroit';
var delay=500;

function changeImage() {
    var img = document.getElementById("bike");
    if (image_tracker=='piedDroit'){
        img.src="./autres/bike2.svg";
        image_tracker='piedGauche';
    }
    else {
        img.src="./autres/bike.svg";
        image_tracker='piedDroit';
    }
}
var timer=setInterval(changeImage,delay);