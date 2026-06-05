/* ================================================================
   BIRTHDAY GALLERY — main.js
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   🎂  CUSTOMIZE THIS SECTION
   ---------------------------------------------------------------- */

// Change this to the birthday person's name!
const BIRTHDAY_NAME = 'Babe';

// Number of photos — must match the files in /images/
// Default is 10 (photo1.jpg … photo10.jpg)
const PHOTO_COUNT = 10;

// One message per photo slot — edit freely!
const MESSAGES = [
  `Happy Birthday, ${BIRTHDAY_NAME}! 🎂 May this day overflow with all the joy, laughter, and love you so richly deserve. You make every day brighter just by being in it!`,
  `Another year around the sun, ${BIRTHDAY_NAME}! ✨ And with every single one you just keep getting more wonderful. Here's to a year even more amazing than the last!`,
  `The world is a better place with you in it, ${BIRTHDAY_NAME}. 🌟 On your special day, may every moment be perfect and every wish come true. You deserve every bit of it!`,
  `To the most incredible ${BIRTHDAY_NAME} — 🎉 thank you for all the memories, all the laughs, and all the love. Today we celebrate YOU, and it's not nearly enough!`,
  `Happy Birthday! 💫 They say you only get better with age, and in your case that couldn't be more true. Keep shining, ${BIRTHDAY_NAME} — your best days are still ahead!`,
  `🎈 Here's to ${BIRTHDAY_NAME} — may your birthday be as big, bold, and beautiful as your personality. Wishing you a day full of surprises and a year full of dreams come true!`,
  `On your birthday and always, ${BIRTHDAY_NAME}, know that you are so deeply loved. 💝 May this day be the start of the most wonderful chapter yet. Cheers to you!`,
  `Sending you a mountain of birthday hugs, ${BIRTHDAY_NAME}! 🤗 You have a rare gift for making everyone around you feel seen and loved. Today, we celebrate that gift!`,
  `The years go by but you only grow more magnificent, ${BIRTHDAY_NAME}! 🌸 May your birthday be as radiant as you are and your year ahead be filled with pure magic!`,
  `Happy Birthday, ${BIRTHDAY_NAME}! 🎊 You are a gift to everyone lucky enough to know you. May this beautiful day remind you just how much joy you bring to this world!`,
];

// Gradient backgrounds shown while photos load (or if no photo added yet)
const GRADIENTS = [
  'linear-gradient(135deg,#FF6B9D,#FF8E53)',
  'linear-gradient(135deg,#A855F7,#EC4899)',
  'linear-gradient(135deg,#06B6D4,#3B82F6)',
  'linear-gradient(135deg,#F59E0B,#EF4444)',
  'linear-gradient(135deg,#10B981,#06B6D4)',
  'linear-gradient(135deg,#8B5CF6,#EC4899)',
  'linear-gradient(135deg,#F97316,#EAB308)',
  'linear-gradient(135deg,#EC4899,#8B5CF6)',
  'linear-gradient(135deg,#14B8A6,#6366F1)',
  'linear-gradient(135deg,#F43F5E,#8B5CF6)',
];

/* ----------------------------------------------------------------
   DOM REFS
   ---------------------------------------------------------------- */
const galleryWrap = document.getElementById('galleryWrap');
const galleryTrack = document.getElementById('galleryTrack');
const modal       = document.getElementById('modal');
const modalClose  = document.getElementById('modalClose');
const modalImg    = document.getElementById('modalImg');
const modalPh     = document.getElementById('modalPh');
const msgText     = document.getElementById('msgText');
const msgNum      = document.getElementById('msgNum');
const msgTotal    = document.getElementById('msgTotal');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const musicBtn    = document.getElementById('musicBtn');
const heroDesc    = document.getElementById('heroDesc');
const confettiCvs = document.getElementById('confetti-canvas');
const confettiCtx = confettiCvs.getContext('2d');

/* ----------------------------------------------------------------
   STATE
   ---------------------------------------------------------------- */
let currentIdx       = 0;
let modalOpen        = false;
let typewriterTimer  = null;
let isDragging       = false;
let dragStartX       = 0;
let scrollStart      = 0;
let didDrag          = false;
let autoScrollPaused = false;
let autoScrollTimer  = null;
const CARD_GAP       = 28; // must match --card-gap in CSS

/* ================================================================
   CONFETTI
   ================================================================ */
const CONFETTI_COLORS = [
  '#FFD54F','#F472B6','#C084FC','#67E8F9',
  '#F97316','#86EFAC','#FB923C','#A78BFA',
  '#FF6B9D','#FDE68A',
];
let particles   = [];
let confettiRaf = null;

function resizeCanvas() {
  confettiCvs.width  = window.innerWidth;
  confettiCvs.height = window.innerHeight;
}

function burst(ox, oy, count = 90) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 11 + 3;
    particles.push({
      x: ox, y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 7,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size:  Math.random() * 9 + 4,
      rot:   Math.random() * Math.PI * 2,
      rotV:  (Math.random() - 0.5) * 0.26,
      circle: Math.random() < 0.38,
      alpha: 1,
    });
  }
  if (!confettiRaf) drawConfetti();
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCvs.width, confettiCvs.height);
  particles = particles.filter(p => p.alpha > 0.02);

  for (const p of particles) {
    p.x   += p.vx;
    p.y   += p.vy;
    p.vy  += 0.33;
    p.vx  *= 0.989;
    p.rot += p.rotV;
    p.alpha -= 0.011;
    confettiCtx.save();
    confettiCtx.globalAlpha = Math.max(0, p.alpha);
    confettiCtx.fillStyle   = p.color;
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    if (p.circle) {
      confettiCtx.beginPath();
      confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      confettiCtx.fill();
    } else {
      confettiCtx.fillRect(-p.size / 2, -p.size * 0.28, p.size, p.size * 0.56);
    }
    confettiCtx.restore();
  }

  confettiRaf = particles.length > 0 ? requestAnimationFrame(drawConfetti) : null;
}

/* ================================================================
   AUDIO — "Happy Birthday" via Web Audio API
   No external files needed.
   ================================================================ */
class BirthdayAudio {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isPlaying  = false;
    this._loop      = null;
  }

  _init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.32;
    this.masterGain.connect(this.ctx.destination);
  }

  _note(freq, t, dur, vol = 0.5) {
    if (!freq) return;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.type            = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.015);
    gain.gain.setValueAtTime(vol, t + dur * 0.76);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  _bell(freq, t, vol = 0.1) {
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.9);
    osc.start(t);
    osc.stop(t + 2);
  }

  _schedule() {
    // Happy Birthday To You — full song
    // [frequency(Hz), duration(s)]  — 0 = rest
    const song = [
      // "Happy Birthday to you"
      [392,0.33],[392,0.14],[440,0.47],[392,0.47],[523,0.47],[494,0.95],[0,0.28],
      // "Happy Birthday to you"
      [392,0.33],[392,0.14],[440,0.47],[392,0.47],[587,0.47],[523,0.95],[0,0.28],
      // "Happy Birthday dear ___"
      [392,0.33],[392,0.14],[784,0.47],[659,0.47],[523,0.47],[494,0.47],[440,0.85],[0,0.18],
      // "Happy Birthday to you"
      [698,0.33],[698,0.14],[659,0.47],[523,0.47],[587,0.47],[523,1.45],[0,0.55],
    ];

    let t   = this.ctx.currentTime + 0.08;
    let tot = 0;
    for (const [f, d] of song) {
      this._note(f, t, d * 0.9);
      t   += d;
      tot += d;
    }

    // Soft bells sprinkled throughout
    const bells = [523, 659, 784, 1047];
    for (let i = 0; i < 5; i++) {
      this._bell(
        bells[Math.floor(Math.random() * bells.length)],
        this.ctx.currentTime + Math.random() * 4,
        0.09,
      );
    }
    return tot;
  }

  play() {
    this._init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const dur = this._schedule();
    this.isPlaying = true;
    clearTimeout(this._loop);
    this._loop = setTimeout(() => { if (this.isPlaying) this.play(); }, (dur + 0.7) * 1000);
  }

  stop() {
    clearTimeout(this._loop);
    this.isPlaying = false;
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.38);
      setTimeout(() => { if (this.masterGain) this.masterGain.gain.value = 0.32; }, 1400);
    }
  }

  toggle() {
    if (this.isPlaying) { this.stop(); return false; }
    this.play(); return true;
  }
}

const audio = new BirthdayAudio();

/* ================================================================
   GALLERY BUILD
   ================================================================ */
function buildGallery() {
  msgTotal.textContent = String(PHOTO_COUNT).padStart(2, '0');
  galleryTrack.innerHTML = '';

  // Render 3 identical sets → seamless infinite loop
  for (let set = 0; set < 3; set++) {
    for (let i = 0; i < PHOTO_COUNT; i++) {
      galleryTrack.appendChild(makeCard(i));
    }
  }

  // Jump to the middle set on first paint
  requestAnimationFrame(() => {
    const first = galleryTrack.querySelector('.photo-card');
    if (!first) return;
    const w = first.offsetWidth + CARD_GAP;
    galleryWrap.scrollLeft = w * PHOTO_COUNT;
    startAutoScroll();
  });
}

function makeCard(idx) {
  const card = document.createElement('div');
  card.className          = 'photo-card';
  card.dataset.photoIndex = idx;

  // Gradient placeholder (shown until image loads)
  const ph = document.createElement('div');
  ph.className      = 'card-placeholder';
  ph.style.background = GRADIENTS[idx % GRADIENTS.length];

  const icon  = document.createElement('span');
  icon.className   = 'card-ph-icon';
  icon.textContent = '📸';

  const lbl  = document.createElement('span');
  lbl.textContent = `Photo ${idx + 1}`;

  ph.append(icon, lbl);

  // Actual image
  const img       = document.createElement('img');
  img.className   = 'card-img';
  img.alt         = `Birthday photo ${idx + 1}`;
  img.loading     = 'lazy';
  img.draggable   = false;
  img.src         = `images/photo${idx + 1}.jpg`;
  img.onload      = () => (ph.style.display = 'none');
  img.onerror     = () => (img.style.display = 'none');

  // Shine, label, hint
  const shine   = document.createElement('div');
  shine.className = 'card-shine';

  const cardLbl   = document.createElement('div');
  cardLbl.className   = 'card-label';
  cardLbl.textContent = String(idx + 1).padStart(2, '0');

  const hint   = document.createElement('div');
  hint.className   = 'card-open-hint';
  hint.textContent = '✨';

  card.append(ph, img, shine, cardLbl, hint);

  // Click → open modal (but not if we were dragging)
  card.addEventListener('click', (e) => {
    if (!didDrag) openModal(idx, e.clientX, e.clientY);
  });

  return card;
}

/* ================================================================
   INFINITE LOOP LOGIC
   ================================================================ */
function cardWidth() {
  const first = galleryTrack.querySelector('.photo-card');
  return first ? first.offsetWidth + CARD_GAP : 0;
}

function checkLoop() {
  const w   = cardWidth();
  if (!w) return;
  const set = w * PHOTO_COUNT;
  if (galleryWrap.scrollLeft < w * 0.5) {
    galleryWrap.scrollLeft += set;
  } else if (galleryWrap.scrollLeft > set * 2 + w * 0.5) {
    galleryWrap.scrollLeft -= set;
  }
}

/* ================================================================
   AUTO SCROLL
   ================================================================ */
let autoRaf = null;
const SCROLL_SPEED = 0.55; // pixels/frame

function startAutoScroll() {
  if (autoRaf) cancelAnimationFrame(autoRaf);
  function tick() {
    if (!autoScrollPaused && !isDragging && !modalOpen) {
      galleryWrap.scrollLeft += SCROLL_SPEED;
      checkLoop();
    }
    autoRaf = requestAnimationFrame(tick);
  }
  autoRaf = requestAnimationFrame(tick);
}

function pauseAutoScroll(ms = 3200) {
  autoScrollPaused = true;
  clearTimeout(autoScrollTimer);
  autoScrollTimer = setTimeout(() => (autoScrollPaused = false), ms);
}

/* ================================================================
   DRAG / TOUCH SCROLL
   ================================================================ */
galleryWrap.addEventListener('mousedown', (e) => {
  isDragging  = true;
  didDrag     = false;
  dragStartX  = e.pageX;
  scrollStart = galleryWrap.scrollLeft;
  galleryWrap.classList.add('is-dragging');
  pauseAutoScroll();
});
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.pageX - dragStartX;
  if (Math.abs(dx) > 4) didDrag = true;
  galleryWrap.scrollLeft = scrollStart - dx * 1.4;
  checkLoop();
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  galleryWrap.classList.remove('is-dragging');
  setTimeout(() => (didDrag = false), 50);
});

galleryWrap.addEventListener('touchstart', (e) => {
  isDragging  = true;
  didDrag     = false;
  dragStartX  = e.touches[0].clientX;
  scrollStart = galleryWrap.scrollLeft;
  pauseAutoScroll();
}, { passive: true });
galleryWrap.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const dx = dragStartX - e.touches[0].clientX;
  if (Math.abs(dx) > 4) didDrag = true;
  galleryWrap.scrollLeft = scrollStart + dx * 1.2;
  checkLoop();
}, { passive: true });
galleryWrap.addEventListener('touchend', () => {
  isDragging = false;
  setTimeout(() => (didDrag = false), 50);
});

/* ================================================================
   TYPEWRITER
   ================================================================ */
function typewrite(el, text, speed = 36) {
  clearTimeout(typewriterTimer);
  el.textContent = '';
  let i = 0;
  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++);
      typewriterTimer = setTimeout(tick, speed);
    }
  }
  tick();
}

/* ================================================================
   MODAL
   ================================================================ */
function openModal(idx, clickX, clickY) {
  currentIdx = idx;

  // Photo
  modalPh.style.display     = 'flex';
  modalPh.style.background  = GRADIENTS[idx % GRADIENTS.length];
  modalPh.innerHTML         = '<span style="font-size:78px">🎂</span>';
  modalImg.style.display    = 'block';
  modalImg.src              = `images/photo${idx + 1}.jpg`;
  modalImg.onload  = () => (modalPh.style.display = 'none');
  modalImg.onerror = () => (modalImg.style.display = 'none');

  // Counter
  msgNum.textContent = String(idx + 1).padStart(2, '0');

  // Show modal
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalOpen = true;

  // Confetti from click point (or center)
  burst(
    clickX != null ? clickX : window.innerWidth  / 2,
    clickY != null ? clickY : window.innerHeight / 2,
  );

  // Typewriter starts after modal open animation
  msgText.textContent = '';
  setTimeout(() => typewrite(msgText, MESSAGES[idx] ?? MESSAGES[0], 36), 460);
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalOpen = false;
  clearTimeout(typewriterTimer);
}

function navigate(dir) {
  const next = (currentIdx + dir + PHOTO_COUNT) % PHOTO_COUNT;
  openModal(next, window.innerWidth / 2, window.innerHeight / 2);
}

/* ================================================================
   EVENT LISTENERS
   ================================================================ */
modalClose.addEventListener('click', closeModal);

// Click backdrop to close
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(+1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!modalOpen) return;
  if (e.key === 'Escape')                                closeModal();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    navigate(-1);
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  navigate(+1);
});

// // Music toggle
// musicBtn.addEventListener('click', () => {
//   const playing = audio.toggle();
//   musicBtn.classList.toggle('playing', playing);
//   musicBtn.title = playing ? 'Pause Music' : 'Play Birthday Music';
// });

window.addEventListener('resize', resizeCanvas);

// Music toggle (manual)
musicBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // don't also trigger the autoplay listener
  const playing = audio.toggle();
  musicBtn.classList.toggle('playing', playing);
  musicBtn.title = playing ? 'Pause Music' : 'Play Birthday Music';
});

// Autoplay on first interaction anywhere on the page
function startOnFirstInteraction() {
  if (!audio.isPlaying) {
    audio.play();
    musicBtn.classList.add('playing');
    musicBtn.title = 'Pause Music';
  }
  document.removeEventListener('click',     startOnFirstInteraction);
  document.removeEventListener('touchstart', startOnFirstInteraction);
  document.removeEventListener('keydown',   startOnFirstInteraction);
}
document.addEventListener('click',     startOnFirstInteraction);
document.addEventListener('touchstart', startOnFirstInteraction, { passive: true });
document.addEventListener('keydown',   startOnFirstInteraction);

/* ================================================================
   INIT
   ================================================================ */
// Set page title & hero personalisation
if (BIRTHDAY_NAME && BIRTHDAY_NAME !== 'You') {
  document.title = `Happy Birthday, ${BIRTHDAY_NAME}! 🎂`;
  if (heroDesc) heroDesc.textContent =
    `Scroll through cherished memories of ${BIRTHDAY_NAME} — click any photo to reveal a birthday message`;
}

resizeCanvas();
buildGallery();
