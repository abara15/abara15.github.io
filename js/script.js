// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "#16161D";
        document.getElementById("header").style.paddingTop = "30px";
        document.getElementById("header").style.paddingBottom = "30px";
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.paddingTop = "60px";
        document.getElementById("header").style.paddingBottom = "60px";
    }
}