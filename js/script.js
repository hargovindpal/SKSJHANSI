

//    script to show big image after click on
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.querySelectorAll(".newsgallery .image");
    const close = document.getElementsByClassName("close")[0];
  
    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });
  
    close.addEventListener("click", function() {
        modal.style.display = "none";
    });
  
    modal.addEventListener("click", function(e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
  });