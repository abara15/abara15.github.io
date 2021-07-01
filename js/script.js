// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("header").style.backgroundColor = "#111";
        document.getElementById("header").style.paddingTop = "10px";
        document.getElementById("header").style.paddingBottom = "10px";
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.paddingTop = "40px";
        document.getElementById("header").style.paddingBottom = "40px";
    }
}