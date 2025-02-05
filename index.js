window.onload = function() {
    
    let counterElement1 = document.getElementById("counter");
    let currentCount1 = 1;
    const targetCount1 = 26;
    
    const interval1 = setInterval(function() {
        if (currentCount1 <= targetCount1) {
            counterElement1.textContent = currentCount1 + "+"; 
            currentCount1++;
        } else {
            clearInterval(interval1); 
        }
    }, 45); 
    let counterElement2 = document.getElementById("count5");
    let currentCount2 = 1;
    const targetCount2 = 5;
    
    const interval2 = setInterval(function() {
        if (currentCount2 <= targetCount2) {
            counterElement2.textContent = currentCount2 + "+"; 
            currentCount2++;
        } else {
            clearInterval(interval2); 
        }
    }, 50); 
    let counterElement3 = document.getElementById("count14");
    let currentCount3 = 1;
    const targetCount3 = 14;
    
    const interval3 = setInterval(function() {
        if (currentCount3 <= targetCount3) {
            counterElement3.textContent = currentCount3 + "+";
            currentCount3++;
        } else {
            clearInterval(interval3); 
        }
    }, 50); 
    let counterElement4 = document.getElementById("count99");
    let currentCount4 = 1;
    const targetCount4 = 99;
    
    const interval4 = setInterval(function() {
        if (currentCount4 <= targetCount4) {
            counterElement4.textContent = currentCount4 + "+"; 
            currentCount4++;
        } else {
            clearInterval(interval4); 
        }
    }, 20); 
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show Scroll-to-Top Button
        const scrollBtn = document.getElementById('scrollToTop');
        if (window.scrollY > 200) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });

    // Scroll to top functionality
    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

window.addEventListener("scroll", function () {
    let navbar = document.querySelector('nav'); // Get the navbar element
    let menuItems = document.querySelectorAll('#Menu a'); // Get all menu items
    if (window.scrollY > 50) { // Trigger scroll effect after 50px scroll
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
