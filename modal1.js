var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("gallery-img");
var header = document.getElementById("site-header");
var closeButton = document.getElementsByClassName("close")[0];


// Open the image
for (var i = 0; i < images.length; i++) {

    images[i].onclick = function() {

        modal.style.display = "block";

        modalImg.src = this.src;

        captionText.innerHTML = this.alt;

        // Hide the header
        header.classList.add("nav-hidden");
    };
}


// Close using X
closeButton.onclick = function() {

    modal.style.display = "none";

    // Show header again
    header.classList.remove("nav-hidden");
};


// Close when clicking the black background
modal.onclick = function(event) {

    if (event.target === modal) {

        modal.style.display = "none";

        // Show header again
        header.classList.remove("nav-hidden");
    }
};
