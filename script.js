const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Random font rotation on each typing loop cycle
const heroTitle = document.querySelector('.hero-title');
const typewriter = document.querySelector('.typewriter');

const fonts = [
  "'Fraunces', 'Georgia', serif",
  "'Space Mono', 'Courier New', monospace",
  "'Playfair Display', 'Georgia', serif",
  "'Syne', 'Inter', sans-serif",
  "'Cinzel', 'Times New Roman', serif"
];

let currentFontIndex = -1;

function setRandomFont() {
  if (!heroTitle) return;
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * fonts.length);
  } while (nextIndex === currentFontIndex && fonts.length > 1);

  currentFontIndex = nextIndex;
  heroTitle.style.fontFamily = fonts[currentFontIndex];
}

// Initial random font on load
setRandomFont();

// Change font every time the typing loop completes an iteration (when text is deleted back to 0)
const line1 = document.querySelector('.typewriter.line-1');
if (line1) {
  line1.addEventListener('animationiteration', (event) => {
    if (event.animationName === 'typing-line1') {
      setRandomFont();
    }
  });
} else if (typewriter) {
  typewriter.addEventListener('animationiteration', (event) => {
    if (event.animationName.startsWith('typing')) {
      setRandomFont();
    }
  });
}
