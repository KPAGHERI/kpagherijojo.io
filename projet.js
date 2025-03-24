




document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Votre message a bien été envoyé !");
});
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}