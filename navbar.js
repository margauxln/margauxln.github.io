//NAVBAR BURGER

function myFunction() {
    var x = document.getElementById("navbarElements");
    if (x.className === "navbarElements") {
        x.className += "_responsive";
    } else {
        x.className = "navbarElements";
    }
    var y = document.getElementById("navName");
    if (y.className === "navName") {
        y.className += "_responsive";
    } else {
        y.className = "navName";
    }
}