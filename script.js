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

const heroPhrases = [
  { line1: 'Ideas,', line2: 'given form.' },
  { line1: 'Where ideas', line2: 'take shape' },
  { line1: 'Possibility,', line2: 'developed' },
  { line1: 'From thought', line2: 'to creation' },
  { line1: 'Ideas made', line2: 'tangible' },
  { line1: 'Concepts', line2: 'made real' },
  { line1: 'Where imagination', line2: 'becomes reality' },
  { line1: 'Curiosity made', line2: 'tangible' },
  { line1: 'Thinking beyond', line2: 'boundaries' },
  { line1: 'Built from', line2: 'ideas' },
  { line1: 'From concept', line2: 'to creation' },
  { line1: 'Creating', line2: 'what could be' },
  { line1: 'Exploring', line2: 'what\'s possible' },
  { line1: 'Ideas without', line2: 'boundaries' },
  { line1: 'Where creativity', line2: 'takes form' },
  { line1: 'Thought. Design.', line2: 'Creation.' },
  { line1: 'Imagine.', line2: 'Explore. Create.' },
  { line1: 'Question.', line2: 'Create. Refine.' },
  { line1: 'Different thinking.', line2: 'Real solutions.' },
  { line1: 'Creative thinking,', line2: 'engineered.' }
];

let currentPhraseIndex = 0;

function setHeroPhrase() {
  const line1 = document.querySelector('.typewriter.line-1');
  const line2 = document.querySelector('.typewriter.line-2');
  if (!line1 || !line2) return;

  const phrase = heroPhrases[currentPhraseIndex];
  line1.textContent = phrase.line1;
  line2.textContent = phrase.line2;
  currentPhraseIndex = (currentPhraseIndex + 1) % heroPhrases.length;
}

setHeroPhrase();

function fitLineToWidth(lineElement, preferredMaxWidth) {
  if (!lineElement) return;

  const lineText = lineElement.textContent || '';
  if (!lineText.trim()) return;

  const startSize = window.innerWidth < 700 ? 28 : 64;
  let fontSize = startSize;

  lineElement.style.fontSize = `${fontSize}px`;

  while (fontSize > 18 && lineElement.scrollWidth > preferredMaxWidth) {
    fontSize -= 1;
    lineElement.style.fontSize = `${fontSize}px`;
  }
}

function fitHeroTextToContainer() {
  if (!heroTitle) return;

  const line1 = document.querySelector('.typewriter.line-1');
  const line2 = document.querySelector('.typewriter.line-2');
  const availableWidth = Math.max(heroTitle.clientWidth || heroTitle.offsetWidth || 0, 180);

  heroTitle.style.fontSize = '';

  fitLineToWidth(line1, Math.min(availableWidth * 0.96, window.innerWidth < 700 ? 260 : 420));
  fitLineToWidth(line2, Math.min(availableWidth * 0.96, window.innerWidth < 700 ? 300 : 540));
}

function updateResponsiveHero() {
  fitHeroTextToContainer();
  setRandomFont();
}

window.addEventListener('resize', updateResponsiveHero);
window.addEventListener('orientationchange', updateResponsiveHero);
window.addEventListener('load', updateResponsiveHero);

// Change font and text every time the typing loop completes an iteration (when text is deleted back to 0)
const line1 = document.querySelector('.typewriter.line-1');
if (line1) {
  line1.addEventListener('animationiteration', (event) => {
    if (event.animationName === 'typing-line1') {
      setRandomFont();
      setHeroPhrase();
      updateResponsiveHero();
    }
  });
} else if (typewriter) {
  typewriter.addEventListener('animationiteration', (event) => {
    if (event.animationName.startsWith('typing')) {
      setRandomFont();
      setHeroPhrase();
      updateResponsiveHero();
    }
  });
}

updateResponsiveHero();
