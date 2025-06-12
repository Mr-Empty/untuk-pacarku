document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            alert(`Ini adalah foto ke-${index + 1}.`);
        });
    });
});
