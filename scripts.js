// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('#hero h2');
    
    function trippyText() {
        heroText.style.transform = `scale(${1 + Math.sin(Date.now() / 1000) * 0.1})`;
        heroText.style.color = `hsl(${Date.now() / 10 % 360}, 100%, 50%)`;
    }
    
    setInterval(trippyText, 100);
});
