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
const PHOTO_COUNT = 67;

One message per photo slot — edit freely!
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

// const PHOTO_COUNT = 67;

// const PHOTO_COUNT = 67;

// const MESSAGES = [
//   // 1
//   `okay wait. this is literally the only photo where you look like you just finished a whole buffet. we both know the truth though. you eat like a bird and still have the audacity to look this adorable. happy birthday to the girl who survives on air and smiles. 🍽️💕`,

//   // 2
//   `twelve hours on the road to Silchar, and I swear it felt like twelve minutes. that's what happens when you're sitting next to someone who makes the world feel smaller and warmer. every pit stop, every song, every moment with you. I'd take that road a hundred times more. 🛣️💛`,

//   // 3
//   `and then we went back. and then we went back again. and somehow, every single time at that sizzler place, it felt like the first time all over again. look at us, genuinely the happiest people in that restaurant. some things are just worth repeating forever. 🥩✨`,

//   // 4
//   `IITG bus day. I know buses aren't really your thing, and I completely respect that. but can we acknowledge how clean those buses actually are? I hope the company made up for the ride. I really hope I didn't disappoint you that day. 🚌💙`,

//   // 5
//   `every time I look at this photo, I just feel this overwhelming urge to keep you close and protect you from every bad thing in the world. some people have that effect on you. you always will on me. 🥺💕`,

//   // 6
//   `okay yes, the movie was terrible. genuinely a waste of two hours of our lives that we'll never get back. BUT my credit card literally pays for movie tickets every month, so was it really a waste? technically free nonsense. would do it again without hesitation. 🎬💳`,

//   // 7
//   `there's something about this picture that makes me smile instantly. it feels warm, comfortable, and completely you. one of those moments that just feels good to remember. 👸✨`,

//   // 8
//   `some places become special because of the people you're with. every time I think about this one, I remember how easy it felt just being there with you. 🛍️💛`,

//   // 9
//   `I don't know why, but seeing you happy over the little things always makes me happy too. I hope life keeps giving you reasons to smile exactly like this. 🍜💕`,

//   // 10
//   `our spot. not because it was extraordinary or dramatic. just because it was ours. and somehow that made it perfect. 🍫💛`,

//   // 11
//   `this photo feels like one of those memories that stays bright no matter how much time passes. every little detail still makes me smile. 🌅📱💗`,

//   // 12
//   `there's a kind of happiness in this photo that feels impossible to fake. every time I see it, it makes me smile too. 😌💕`,

//   // 13
//   `another year of being completely, effortlessly wonderful. wishing you a birthday as beautiful as you are, full of warmth, good food, and every little thing that makes your eyes light up. you deserve the whole world today. 🎂✨`,

//   // 14
//   `happy birthday to the person who somehow manages to make ordinary days feel quietly special. may this year bring you everything your heart has been hoping for. you are so loved, more than you know. 💝🌟`,

//   // 15
//   `okay this one is entirely my fault and I am truly sorry. there was a rainbow. an actual rainbow. and I was standing right next to one of the most beautiful things I have ever seen, and somehow I couldn't fit both of you in the frame. the rainbow was pretty though. you were prettier. 🌈😅💕`,

//   // 16
//   `uff. this photo reminds me why I fell for you in the first place. some things really do speak for themselves. 😶‍🌫️💛`,

//   // 17
//   `excuse me, why are you buried in your phone looking for signal like that? put it down. your network is right here. five bars, always available, never drops, zero dead zones. 📶💙`,

//   // 18
//   `I don't even remember what went wrong here, but I remember wanting to make everything okay again. that's the feeling this photo gives me every time. 🥺✨`,

//   // 19
//   `some photos remind you of a place. this one reminds me of how lucky I felt to be there with you. 🌿👑`,

//   // 20
//   `happy birthday to someone who brings colour to every ordinary moment. wishing you a year that surprises you in the best ways, full of laughter, warmth, and everything you deserve. 🎉💕`,

//   // 21
//   `this photo feels peaceful in a way that's hard to explain. like everything was exactly where it was supposed to be for just one perfect moment. 🌳💛🙏`,

//   // 22
//   `THE photo. the one single proof that she can, in fact, stay awake during a journey when she really tries. I know what it costs you. I see the sacrifice. I deeply respect it. 🚆😴💕`,

//   // 23
//   `wishing you a birthday full of all the little moments that catch you off guard and make you smile for no reason. you deserve days that feel as good as you make mine feel every single time. 🌸✨`,

//   // 24
//   `every time I see this photo, I remember how happy that day felt. not because of where we were, but because I got to share it with you. 🏞️💛`,

//   // 25
//   `I don't know how to explain it, but this photo feels like one of those memories that gets more special every year. 👸🏔️✨`,

//   // 26
//   `us, in the valley, together. and this one I will keep forever. not because the view was beautiful, though it really was. but because you were right there next to me, and that was the whole point. 🏞️💕`,

//   // 27
//   `I love this one because it feels like a memory I accidentally got to keep. the kind that becomes more precious the longer you hold onto it. 📷🥺💛`,

//   // 28
//   `yes, I wore it intentionally. your favourite colour, your least enthusiastic expression, and still somehow the cutest selfie. you're smiling though. faintly. barely. but it's there and I'll take it. 😌💕`,

//   // 29
//   `every time I see this photo, I wonder if you realise how loved you are. because from where I'm standing, it's impossible not to adore you. 🌸😊`,

//   // 30
//   `this picture never fails to make me laugh. it's so unapologetically you, and honestly that's my favourite thing about it. 📸😂💕`,

//   // 31
//   `this photo just feels peaceful to me. the kind of peaceful that makes you forget everything else for a moment. every time I look at it, I feel a little calmer too. 📚✨`,

//   // 32
//   `this photo confuses me in the funniest way possible. everything looks perfect, you look happy, and yet somehow the review says otherwise. some mysteries aren't meant to be solved. 🍱😂💛`,

//   // 33
//   `I love photos like this because they remind me how much joy there is in simple moments. sometimes happiness really is that uncomplicated. 🚂🍽️💕`,

//   // 34
//   `this photo always makes me think the same thing. I got unbelievably lucky. that's it. that's the whole caption. 👑💛`,

//   // 35
//   `happy birthday to the girl who makes everything look effortless and beautiful. wishing you a year so good it surprises even you. you deserve all the soft, wonderful things life has quietly been saving up for you. 🎂💝`,

//   // 36
//   `every time I look at this one, it feels like I'm looking at the main character of a story I never want to end. 🎬✨💗`,

//   // 37
//   `some pictures capture a view. this one captures a feeling. and every time I see it, I remember how happy I was in that moment. 🏔️💛`,

//   // 38
//   `wishing you a birthday as warm and lovely as you are. may this year be filled with good surprises, great food, and every single thing that makes your eyes light up unexpectedly. you are so deeply loved. 💝🌟`,

//   // 39
//   `happy birthday football field. I mean, happy birthday my love. you know I say this with the most affection a person is capable of feeling. there is genuinely no one else in this world I would ever say that to. 🏈💛😂`,

//   // 40
//   `here's to another year of being exactly who you are, effortlessly kind, unexpectedly funny, and somehow always the most interesting person in the room. happy birthday babe. 🎉💕`,

//   // 41
//   `there's something comforting about this photo. everything feels quiet, peaceful, and exactly as it should be. 😴💛`,

//   // 42
//   `wishing you a year that matches your energy, warm, genuine, and a little bit magical in ways you didn't even plan for. happy birthday to someone who deserves every good thing without question. 🌸✨`,

//   // 43
//   `another year of memories, laughter, and all the small moments in between that end up meaning the most. I hope this birthday feels as special as you are to me. wishing you nothing but happiness, today and always. 💝🎂`,

//   // 44
//   `this photo makes me happy every single time. it feels light, free, and full of the kind of moments you wish could last a little longer. 🌿💛`,

//   // 45
//   `I remember seeing this photo and immediately forgetting about everything else around it. some people just have that effect on you. 💍✨💕`,

//   // 46
//   `do you still remember our first trip? because I do. every single detail of it, what we said, where we went, how it felt. some firsts stay with you forever. 🛣️💛`,

//   // 47
//   `I don't remember what happened here, but I remember thinking that even your dramatic moments somehow make me smile. 😤💕`,

//   // 48
//   `this photo feels like excitement. like the beginning of a memory that you already know you'll look back on someday. 🌙✨💛`,

//   // 49
//   `if happiness had a photograph, it would probably look a little bit like this. simple, comfortable, and shared with the right person. 🥤💕`,

//   // 50
//   `some photos feel like home. this is one of them. warm, familiar, and impossible not to love. 🏠✨💛`,

//   // 51
//   `I love this one because it feels so ordinary. and somehow those ordinary moments always end up becoming the memories I treasure most. 🍳💕`,

//   // 52
//   `wishing you a birthday as warm and full as the joy you quietly give to everyone around you without even realising it. you deserve all of it back today. 🎂✨`,

//   // 53
//   `this photo is dangerous. every time I look at it, I end up smiling like an idiot. 🥺💕`,

//   // 54
//   `wishing you a birthday that feels like the best version of a perfect day, warm, unhurried, and full of every little thing that matters most to you. 🌸💛`,

//   // 55
//   `every time I see this photo, I feel proud of you all over again. that's it. that's the caption. 🛵💙`,

//   // 56
//   `wishing you a year full of small adventures, warm surprises, and all the little moments that quietly become your favourite memories when you look back. happy birthday. 🎉💝`,

//   // 57
//   `this photo is pure happiness. no overthinking, no worries, no stress. just joy. 🍄😂💕`,

//   // 58
//   `this one always makes me wonder what was going through your mind. whatever it was, I hope it brought you where you wanted to be. 💭💛`,

//   // 59
//   `there are long captions and thoughtful captions and meaningful captions. and then there's this photo. cute. that's all. 🥺💕`,

//   // 60
//   `seeing you happy will never stop being one of my favourite things. that's what this photo reminds me of every single time. ✨💛`,

//   // 61
//   `wishing you a birthday as bright and easy as the happiness you bring to everyone around you without even trying. you deserve every good thing today and always. 🎂💝`,

//   // 62
//   `out of all the photos here, this one might be my favourite. not because it's perfect. just because it's us. 💕`,

//   // 63
//   `this photo feels like one of those days where everything quietly goes right. I wish more days felt exactly like this for you. 🌟💛`,

//   // 64
//   `I don't remember much about the omelette. I remember how happy that moment felt though, and honestly that's the important part. 🍳👑💕`,

//   // 65
//   `wishing you a year so full of love and good moments that you run out of words to describe how it feels. happy birthday to someone quietly extraordinary. 💝✨`,

//   // 66
//   `this photo makes me laugh because I know exactly what it's trying to convince me of. and no, I'm still not buying it. 🎭😂💕`,

//   // 67
//   `I don't remember taking this photo at all. but maybe that's what makes it special. a little forgotten moment that somehow found its way back to me. 📷😅💛`,
// ];

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
