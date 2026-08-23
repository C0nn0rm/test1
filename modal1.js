var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("gallery-img");

for (var i = 0; i < images.length; i++) {

    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
};

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

var navbar = document.getElementById("navbar");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    navbar.style.display = "none";
};

span.onclick = function() {
    modal.style.display = "none";
    navbar.style.display = "";
};

var navbar = document.getElementById("navbar");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    navbar.classList.add("nav-hidden");
};

span.onclick = function() {
    modal.style.display = "none";

    navbar.classList.remove("nav-hidden");
};

var header = document.getElementById("site-header");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    header.classList.add("nav-hidden");
};

span.onclick = function() {
    modal.style.display = "none";
    header.classList.remove("nav-hidden");
};
