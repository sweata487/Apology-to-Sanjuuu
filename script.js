document.getElementById('forgiveBtn').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    const messages = [
        "Thank you so much! 💙",
        "Your forgiveness means everything to me 💖",
        "I promise to be a better friend 💕",
        "You're the best, Sanjuuu! 💗"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    responseMessage.textContent = randomMessage;
    
    // Add some visual feedback
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
    
    // Create celebration hearts
    createCelebrationHearts();
});

function createCelebrationHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.textContent = ['💙', '💕', '💖', '💗'][Math.floor(Math.random() * 4)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'celebrateFloat 2s ease-out forwards';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// Add animation for celebration hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrateFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);
