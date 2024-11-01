// script.js

fetch('assets/data/poems.json')
  .then(response => response.json())
  .then(poems => {
    const container = document.querySelector('.container');
    const colors = ['#f5f5f5', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#e8f5e9', '#f1f8e9', '#f9fbe7', '#fffde7', '#fff8e1']; // Example Material UI colors

    poems.forEach(poem => {
      const tile = document.createElement('div');
      tile.classList.add('tile');

      // Get a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      tile.style.backgroundColor = randomColor;

      // Set the meaning text color to a lighter shade (you might need a helper function for more complex color manipulation)
      const meaningColor = getLighterShade(randomColor); // You'll need to implement getLighterShade()

      tile.innerHTML = `
        <h3>${poem.title}</h3>
        <p>${poem.content}</p>
        <p class="meaning" style="color: ${meaningColor}">${poem.meaning}</p>
      `;
      container.appendChild(tile);
    });
  });

// Helper function to get a lighter shade of a color (example implementation)
function getLighterShade(hexColor) {
  // This is a very basic implementation. You might need a more robust solution 
  // for accurate color manipulation, especially if you use a wider range of colors.
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const lighterR = Math.min(255, r + 50);
  const lighterG = Math.min(255, g + 50);
  const lighterB = Math.min(255, b + 50);

  return `rgb(${lighterR}, ${lighterG}, ${lighterB})`;
}