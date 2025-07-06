document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing Effect in Hero Section
    const heroText = document.querySelector('header h1');
    const text = 'Giacomo Pedemonte';
    let index = 0;
    heroText.textContent = '';

    function typeText() {
        if (index < text.length) {
            heroText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed by changing the delay value
        }
    }
    typeText();

    // Mouse In/Out Transform for Profile Picture
    const profileImg = document.querySelector('#home img');
    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.1)';
    });
    profileImg.addEventListener('mouseout', () => {
        profileImg.style.transform = 'scale(1)';
    });

    
    let isSpinning = false;

    document.getElementById('spin-card').addEventListener('mouseup', function() {
        isSpinning = true;
        document.querySelector('.spin-card-inner').style.transform = 'rotateY(180deg)';
    });

    document.addEventListener('mousedown', function(event) {
        if (isSpinning && !document.getElementById('spin-card').contains(event.target)) {
            isSpinning = false;
            document.querySelector('.spin-card-inner').style.transform = 'rotateY(0deg)';
        }
    });

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Matrix mode toggle
    let matrixMode = false;
    const toggleMatrixMode = () => {
        matrixMode = !matrixMode;
        if (matrixMode) {
            document.body.classList.add('matrix-mode');
        } else {
            document.body.classList.remove('matrix-mode');
        }
    };
    const matrixButton = document.getElementById('matrix-toggle');
    if (matrixButton) {
        matrixButton.addEventListener('click', toggleMatrixMode);
    }
    
    

});

