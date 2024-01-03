addEventListener("load",() => {
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 3000);
    }
})


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent! I will try to contact you as soon as possible");
    Name.value = "";
    Email.value = "";
    Country.value = "";
    Phone.value = "";
    Message.value = "";
});