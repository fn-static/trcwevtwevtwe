document.getElementById("productsButton").addEventListener("click", function() {
    // Zmniejsz logo i przenieś je na górę ekranu
    document.querySelector("header").classList.add("small");

    // Ukryj przyciski
    document.querySelector(".buttons").style.display = "none";

    // Pokaż produkty
    document.getElementById("products").classList.add("show");
});

document.getElementById("contactButton").addEventListener("click", function() {
    // Zmniejsz logo i przenieś je na górę ekranu
    document.querySelector("header").classList.add("small");

    // Ukryj przyciski
    document.querySelector(".buttons").style.display = "none";

    // Pokaż formularz kontaktowy
    document.getElementById("contact").classList.add("show");
});
