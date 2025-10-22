const images = document.querySelectorAll('img');
const texts = Array.from(document.querySelectorAll('*:not(script):not(style):not(img)'))
  .filter(el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 && el.textContent.trim() !== '');

const imgSources = Array.from(images).map(img => img.src);
const textContents = texts.map(el => el.textContent);

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Swap interval
const swapInterval = setInterval(() => {
  const shuffledImgs = shuffle(imgSources);
  const shuffledTexts = shuffle(textContents);

  images.forEach((img, i) => {
    img.src = shuffledImgs[i % shuffledImgs.length];
  });

  texts.forEach((el, i) => {
    el.textContent = shuffledTexts[i % shuffledTexts.length];
  });
}, 100);

// Play first audio
const audio1 = new Audio('https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/raw/refs/heads/main/assets/waiting.wav');
audio1.play();

// After 10 seconds
setTimeout(() => {
  clearInterval(swapInterval);
  audio1.pause();
  
  // Play second audio
  const audio2 = new Audio('https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/raw/refs/heads/main/assets/drftghyjfghj.wav');
  audio2.play();

  // Fullscreen shaking image
  const img = document.createElement('img');
  img.src = 'https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/fghbvgbfvhnfhbv.png?raw=true';
  img.style.position = 'fixed';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100vw';
  img.style.height = '100vh';
  img.style.objectFit = 'cover';
  img.style.zIndex = '9999';
  document.body.appendChild(img);

  // Shaking effect
  const shake = () => {
    img.style.transform = `translate(${Math.random()*20-10}px, ${Math.random()*20-10}px)`;
    requestAnimationFrame(shake);
  };
  shake();

  // Redirect after 5 seconds
  setTimeout(() => {
    window.location.href = 'https://www.windows93.net';
  }, 1000);

}, 7000);
