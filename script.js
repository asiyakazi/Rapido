// ================= RIDE BOOKING =================
const rideBtn = document.querySelector(".ride-btn");
const inputs = document.querySelectorAll("input");

const pickupInput = inputs[0];
const dropInput = inputs[1];

if (rideBtn) {
    rideBtn.addEventListener("click", () => {

        const pickup = pickupInput.value.trim();
        const drop = dropInput.value.trim();

        if (!pickup || !drop) {
            alert("Please enter both pickup and drop locations.");
            return;
        }

        alert(`Ride Booked Successfully!\n\nPickup: ${pickup}\nDrop: ${drop}`);

        pickupInput.value = "";
        dropInput.value = "";
    });
}

// Enter key support
[pickupInput, dropInput].forEach(input => {
    input?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") rideBtn.click();
    });
});


// ================= ACTIVE NAV LINKS =================
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


// ================= ABOUT SCROLL (FIXED ONCE ONLY) =================
const aboutImage = document.querySelector(".about-right img");

if (aboutImage) {
    window.addEventListener("scroll", () => {
        const pos = aboutImage.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            aboutImage.classList.add("show");
        }
    });
}


// ================= OFFER CARDS SCROLL =================
const offerCards = document.querySelectorAll(".offer-card");

window.addEventListener("scroll", () => {
    offerCards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});


// ================= EARN SECTION OBSERVER =================
const earnSection = document.querySelector('.earn-section');

if (earnSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(earnSection);
}


// ================= DOWNLOAD HOVER =================
document.querySelectorAll(".download-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});


// ================= SMOOTH SCROLL =================
const aboutLink = document.querySelector('a[href="#about"]');

if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// ================= MOBILE MENU =================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
function toggleSafety() {

    let section = document.getElementById("more-safety");

    if(section.style.display === "flex"){
        section.style.display = "none";
    }
    else{
        section.style.display = "flex";

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}