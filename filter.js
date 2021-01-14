// FILTER PROJETS

let filter = document.getElementById("projectFilter");

filter.addEventListener('change', function() {
    $(".projet").css("display","none");
    $("."+this.value).css("display","block");
}, false);