
console.log('hello');

let ansh = ['ansari', 'sahab', 'from', 'kolkata'];

let ovr = document.querySelector('.overlay');

ovr.addEventListener('mouseenter', () => {
    ovr.innerHTML = `
        <h1>${ansh[0]}</h1>
        <p>${ansh[1]}</p>
        <p>${ansh[2]}</p>
        <p>${ansh[3]}</p>
    `;
});

// Show the overlay on mouse enter on the card
document.querySelector('.card').addEventListener('mouseenter', () => {
    ovr.style.display = 'flex';
});

// Hide the overlay on mouse leave from the card
document.querySelector('.card').addEventListener('mouseleave', () => {
    ovr.style.display = 'none';
});