document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const quoteElement = document.getElementById('quote');
    const mainTextElement = document.getElementById('main-text');
    const notification = document.getElementById('notification');
    const discordLink = document.getElementById('discord-link');
    const backgroundMusic = document.getElementById('background-music');

    backgroundMusic.loop = true; 

    const quotes = [
        " Paster ",
        " Uc Warrior ",     
    ];
    let quoteIndex = 0;
    
    overlay.addEventListener('click', () => {
        backgroundMusic.volume = 0.05;
        backgroundMusic.play();
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            content.style.display = 'block';
        }, 500);
    });

    function typeQuote() {
        const quote = quotes[quoteIndex];
        let charIndex = 1; 
        quoteElement.innerHTML = quote.charAt(0); 

        function typeChar() {
            if (charIndex < quote.length) {
                quoteElement.innerHTML += quote.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 70);
            } else {
                setTimeout(deleteQuote, 2000);
            }
        }

        function deleteQuote() {
            if (charIndex > 1) { 
                quoteElement.innerHTML = quoteElement.innerHTML.slice(0, -1);
                charIndex--;
                setTimeout(deleteQuote, 50);
            } else {
                quoteIndex = (quoteIndex + 1) % quotes.length;
                setTimeout(typeQuote, 1000);
            }
        }

        typeChar();
    }

    typeQuote();

    discordLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('clixzy_._').then(() => {
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 10);
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 500);
            }, 2000);
        });
    });

    function glitchText() {
        let originalText = "[ Clixzy ]";
        let glitchVariants = ["[ Clixzy ]", "[ Clixzy ]", "[ Clixzy ]", "[ Clixzy ]", "[ Clixzy ]"];
        let glitchIndex = 0;

        function updateText() {
            const text = glitchVariants[glitchIndex];
            mainTextElement.firstChild.textContent = text;
            document.title = text; 
            glitchIndex = (glitchIndex + 1) % glitchVariants.length;
            setTimeout(updateText, 300);
        }

        updateText();
    }

    glitchText();
});
