let clickCount = 0;

const btn = document.getElementById('clickBtn');
const counterText = document.getElementById('counterText');

btn.addEventListener('click', () => {
    clickCount++;
    counterText.textContent = `Button clicked: ${clickCount} time${clickCount === 1 ? '' : 's'}`;
});