// Основные данные
const moodData = {
  happy: {
    tracks: [
      { 
        title: "Happy Hit", 
        artist: "Artist 1", 
        cover: "https://img.freepik.com/free-photo/joyful-woman-jumping_23-2148739332.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
      },
      { 
        title: "Sunny Day", 
        artist: "Artist 2", 
        cover: "https://img.freepik.com/free-photo/happy-laughing-woman_23-2148739333.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      },
      { 
        title: "Good Vibes", 
        artist: "Artist 3", 
        cover: "https://img.freepik.com/free-photo/smiling-woman-enjoying-life_23-2148739334.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
      },
      { 
        title: "Joyful Moments", 
        artist: "Artist 4", 
        cover: "https://img.freepik.com/free-photo/happy-young-woman-singing_23-2148739335.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      },
      { 
        title: "Smile All Day", 
        artist: "Artist 5", 
        cover: "https://img.freepik.com/free-photo/cheerful-woman-dancing_23-2148739336.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      }
    ],
    memes: [
      { 
        image: "https://img.freepik.com/free-photo/happy-man-with-hands-raised_23-2148739331.jpg", 
        text: "Когда наконец пятница!" 
      },
      { 
        image: "https://img.freepik.com/free-photo/joyful-woman-with-flowers_23-2148739337.jpg", 
        text: "Счастье — это когда у тебя хорошее настроение без причины" 
      },
      { 
        image: "https://img.freepik.com/free-photo/laughing-man-with-glasses_23-2148739338.jpg", 
        text: "Когда кофе наконец подействовал" 
      },
      { 
        image: "https://img.freepik.com/free-photo/happy-couple-hugging_23-2148739339.jpg", 
        text: "Мое настроение, когда играет любимая песня" 
      },
      { 
        image: "https://img.freepik.com/free-photo/smiling-woman-with-headphones_23-2148739340.jpg", 
        text: "Когда все идет по плану" 
      }
    ],
    backgroundAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cta: "Продолжайте радоваться вместе с нами!"
  },
  sad: {
    tracks: [
      { 
        title: "Rainy Mood", 
        artist: "Artist 3", 
        cover: "https://img.freepik.com/free-photo/sad-young-woman-looking-down_23-2148739346.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
      },
      { 
        title: "Lonely Night", 
        artist: "Artist 4", 
        cover: "https://img.freepik.com/free-photo/sad-man-sitting-alone_23-2148739347.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      },
      { 
        title: "Tears Fall", 
        artist: "Artist 5", 
        cover: "https://img.freepik.com/free-photo/crying-woman-with-tissue_23-2148739348.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      },
      { 
        title: "Broken Heart", 
        artist: "Artist 6", 
        cover: "https://img.freepik.com/free-photo/sad-woman-looking-window_23-2148739349.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
      },
      { 
        title: "Empty Room", 
        artist: "Artist 7", 
        cover: "https://img.freepik.com/free-photo/lonely-man-sitting-stairs_23-2148739350.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
      }
    ],
    memes: [
      { 
        image: "https://img.freepik.com/free-photo/sad-woman-with-coffee_23-2148739351.jpg", 
        text: "Иногда нужно просто поплакать под хорошую музыку" 
      },
      { 
        image: "https://img.freepik.com/free-photo/sad-man-with-umbrella_23-2148739352.jpg", 
        text: "Это пройдет. И ты станешь сильнее." 
      },
      { 
        image: "https://img.freepik.com/free-photo/sad-young-woman-hugging-knees_23-2148739353.jpg", 
        text: "Когда понимаешь, что понедельник только начался" 
      },
      { 
        image: "https://img.freepik.com/free-photo/sad-man-looking-distance_23-2148739354.jpg", 
        text: "Грусть — это временно, музыка — вечна" 
      },
      { 
        image: "https://img.freepik.com/free-photo/sad-woman-sitting-floor_23-2148739355.jpg", 
        text: "Иногда нужно просто побыть одному" 
      }
    ],
    backgroundAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cta: "Мы поможем вам почувствовать себя лучше"
  },
  energetic: {
    tracks: [
      { 
        title: "Power Up!", 
        artist: "Artist 4", 
        cover: "https://img.freepik.com/free-photo/full-shot-man-playing-basketball_23-2150910650.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      },
      { 
        title: "Energy Boost", 
        artist: "Artist 5", 
        cover: "https://img.freepik.com/free-photo/basketball-game-concept_23-2150910872.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      },
      { 
        title: "Adrenaline Rush", 
        artist: "Artist 6", 
        cover: "https://img.freepik.com/free-photo/close-up-hand-held-basketball_23-2148432531.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
      },
      { 
        title: "Full Speed", 
        artist: "Artist 7", 
        cover: "https://img.freepik.com/premium-photo/basket-ball-flame-goes-fast-basket_207634-6242.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
      },
      { 
        title: "No Limits", 
        artist: "Artist 8", 
        cover: "https://img.freepik.com/free-photo/man-sportswear-playing-basketball_23-2148536566.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
      }
    ],
    memes: [
      { 
        image: "https://img.freepik.com/free-photo/full-shot-man-playing-basketball_23-2150910650.jpg", 
        text: "Готов свернуть горы!" 
      },
      { 
        image: "https://img.freepik.com/free-photo/basketball-game-concept_23-2150910872.jpg", 
        text: "Энергия бьет через край!" 
      },
      { 
        image: "https://img.freepik.com/free-photo/close-up-hand-held-basketball_23-2148432531.jpg", 
        text: "Когда выпил слишком много кофе" 
      },
      { 
        image: "https://img.freepik.com/premium-photo/basket-ball-flame-goes-fast-basket_207634-6242.jpg", 
        text: "Готов свернуть горы!" 
      },
      { 
        image: "https://img.freepik.com/free-photo/man-sportswear-playing-basketball_23-2148536566.jpg", 
        text: "Никакой усталости, только энергия!" 
      }
    ],
    backgroundAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cta: "Зарядитесь энергией на полную!"
  },
  relax: {
    tracks: [
      { 
        title: "Chill Vibes", 
        artist: "Artist 5", 
        cover: "https://img.freepik.com/free-photo/top-view-athlete-laying-down_23-2148222182.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      },
      { 
        title: "Peaceful Mind", 
        artist: "Artist 6", 
        cover: "https://img.freepik.com/free-photo/young-woman-spending-day-park-near-water_259150-58861.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
      },
      { 
        title: "Calm Ocean", 
        artist: "Artist 7", 
        cover: "https://img.freepik.com/premium-photo/beautiful-young-woman-relaxing-couch-spreading-hands_63762-6856.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
      },
      { 
        title: "Soft Rain", 
        artist: "Artist 8", 
        cover: "https://img.freepik.com/free-photo/smiling-confident-girl-with-red-hair-staying-patient-holding-hands-zen-meditation-pose-staring-camera-practice-yoga-standing-calm-against-blue-background_1258-55419.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
      },
      { 
        title: "Gentle Wind", 
        artist: "Artist 9", 
        cover: "https://img.freepik.com/free-photo/young-calm-relaxed-woman-holds-hands-yoga-gesture-keeps-eyes-closed-meditates-indoor-breathes-deeply-meditates-indoor_273609-46534.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
      }
    ],
    memes: [
      { 
        image: "https://img.freepik.com/free-photo/top-view-athlete-laying-down_23-2148222182.jpg", 
        text: "Просто расслабься и дыши..." 
      },
      { 
        image: "https://img.freepik.com/free-photo/young-woman-spending-day-park-near-water_259150-58861.jpg", 
        text: "Покой — это когда не надо ничего решать" 
      },
      { 
        image: "https://img.freepik.com/premium-photo/beautiful-young-woman-relaxing-couch-spreading-hands_63762-6856.jpg", 
        text: "Когда наконец можно отдохнуть" 
      },
      { 
        image: "https://img.freepik.com/free-photo/smiling-confident-girl-with-red-hair-staying-patient-holding-hands-zen-meditation-pose-staring-camera-practice-yoga-standing-calm-against-blue-background_1258-55419.jpg", 
        text: "Медитация — ключ к спокойствию" 
      },
      { 
        image: "https://img.freepik.com/free-photo/young-calm-relaxed-woman-holds-hands-yoga-gesture-keeps-eyes-closed-meditates-indoor-breathes-deeply-meditates-indoor_273609-46534.jpg", 
        text: "Никакой суеты, только релакс" 
      }
    ],
    backgroundAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cta: "Погрузитесь в состояние полного расслабления"
  },
  work: {
    tracks: [
      { 
        title: "Focus Mode", 
        artist: "Artist 10", 
        cover: "https://img.freepik.com/free-photo/coworkers-sitting-desk-with-documents-gadgets_273609-41917.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
      },
      { 
        title: "Deep Work", 
        artist: "Artist 11", 
        cover: "https://img.freepik.com/free-photo/men-performing-vogue-dance-indoors_23-2150942108.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
      },
      { 
        title: "Productivity", 
        artist: "Artist 12", 
        cover: "https://img.freepik.com/free-photo/confident-young-blonde-call-centre-girl-wearing-headset-sitting-desk-with-work-tools-looking-laptop-doing-strong-gesture-isolated-green-wall_141793-113587.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
      },
      { 
        title: "Code Flow", 
        artist: "Artist 13", 
        cover: "https://img.freepik.com/free-photo/smiling-blond-businesswoman-showing-okay-signs-winking-looking-satisfied-approve-praise-smth-good-wearing-corporate-clothing-white-background_176420-50353.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
      },
      { 
        title: "Creative Zone", 
        artist: "Artist 14", 
        cover: "https://img.freepik.com/free-photo/photo-pleased-lady-wears-red-rim-spectacles-eats-delicious-donuts-sits-near-her-male-partner-who-speaks-smart-phone-with-angry-expression_273609-24096.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
      }
    ],
    memes: [
      { 
        image: "https://img.freepik.com/free-photo/coworkers-sitting-desk-with-documents-gadgets_273609-41917.jpg", 
        text: "Когда дедлайн через час" 
      },
      { 
        image: "https://img.freepik.com/free-photo/men-performing-vogue-dance-indoors_23-2150942108.jpg", 
        text: "Работа не волк, но..." 
      },
      { 
        image: "https://img.freepik.com/free-photo/confident-young-blonde-call-centre-girl-wearing-headset-sitting-desk-with-work-tools-looking-laptop-doing-strong-gesture-isolated-green-wall_141793-113587.jpg", 
        text: "Вдохновение приходит во время работы" 
      },
      { 
        image: "https://img.freepik.com/free-photo/smiling-blond-businesswoman-showing-okay-signs-winking-looking-satisfied-approve-praise-smth-good-wearing-corporate-clothing-white-background_176420-50353.jpg", 
        text: "Когда нашел решение сложной задачи" 
      },
      { 
        image: "https://img.freepik.com/free-photo/photo-pleased-lady-wears-red-rim-spectacles-eats-delicious-donuts-sits-near-her-male-partner-who-speaks-smart-phone-with-angry-expression_273609-24096.jpg", 
        text: "Продуктивность на максимуме" 
      }
    ],
    backgroundAudio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    cta: "Повысьте свою продуктивность с правильной музыкой"
  }
};

// Элементы DOM
const moodModal = document.getElementById('moodModal');
const moodInput = document.getElementById('moodInput');
const submitMood = document.getElementById('submitMood');
const moodSuggestions = document.querySelectorAll('.mood-suggestions span');
const moodButtons = document.querySelectorAll('.mood-buttons-row button');
const moodTitle = document.querySelector('#mood-title span');
const tracksContainer = document.getElementById('tracks-container');
const progressBar = document.getElementById('progressBar');
const progressText = document.querySelector('#progressText span');
const memeImage = document.getElementById('memeImage');
const memeText = document.getElementById('memeText');
const newMemeBtn = document.getElementById('newMemeBtn');
const gameContainer = document.getElementById('gameContainer');
const gameScore = document.getElementById('gameScore');
const testimonials = document.querySelectorAll('.testimonial');
const prevTestimonialBtn = document.querySelector('.prev-testimonial');
const nextTestimonialBtn = document.querySelector('.next-testimonial');
const dynamicCta = document.getElementById('dynamicCta');
const mainCtaBtn = document.getElementById('mainCtaBtn');
const audioElement = document.getElementById('audio');
const backgroundAudio = document.getElementById('backgroundAudio');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const soundToggle = document.getElementById('sound-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchBtn = document.getElementById('searchBtn');
const top10Link = document.getElementById('top10-link');
const newTracksLink = document.getElementById('new-tracks-link');
const artistsLink = document.getElementById('artists-link');
const loginLink = document.getElementById('login-link');
const shareVkButtons = document.querySelectorAll('.share-vk');
const shareTgButtons = document.querySelectorAll('.share-tg');

// Состояние приложения
let currentMood = null;
let currentPlaylist = [];
let currentTrackIndex = 0;
let currentMemeIndex = 0;
let score = 0;
let testimonialIndex = 0;
let isSoundOn = true;
let bubbles = [];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  // Показать модальное окно настроения
  setTimeout(() => {
    moodModal.style.display = 'flex';
  }, 1000);

  // Мобильное меню
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Обработчики для модального окна
  submitMood.addEventListener('click', handleMoodSubmit);
  moodInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleMoodSubmit();
  });

  moodSuggestions.forEach(suggestion => {
    suggestion.addEventListener('click', () => {
      moodInput.value = suggestion.textContent;
    });
  });

  // Кнопки настроения
  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentMood = button.dataset.mood;
      updateMoodTheme(currentMood);
      loadContentForMood(currentMood);
    });
  });

  // Генератор мемов
  newMemeBtn.addEventListener('click', loadNewMeme);

  // Управление плеером
  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', playPrev);
  nextBtn.addEventListener('click', playNext);
  soundToggle.addEventListener('click', toggleSound);
  audioElement.addEventListener('play', () => {
    backgroundAudio.pause();
  });
  audioElement.addEventListener('pause', () => {
    if (isSoundOn && audioElement.paused) {
      backgroundAudio.play();
    }
  });
  audioElement.addEventListener('ended', playNext);

  // Тестимониалы
  prevTestimonialBtn.addEventListener('click', showPrevTestimonial);
  nextTestimonialBtn.addEventListener('click', showNextTestimonial);

  // Инициализация игры
  initGame();

  // Показать первый тестимониал
  showTestimonial(0);

  // Кнопка поиска
  searchBtn.addEventListener('click', handleSearch);

  // Навигационные ссылки
  top10Link.addEventListener('click', showTop10);
  newTracksLink.addEventListener('click', showNewTracks);
  artistsLink.addEventListener('click', showArtists);
  loginLink.addEventListener('click', showLogin);

  // Кнопки поделиться
  shareVkButtons.forEach(btn => {
    btn.addEventListener('click', shareToVK);
  });
  
  shareTgButtons.forEach(btn => {
    btn.addEventListener('click', shareToTelegram);
  });

  // CTA кнопка
  mainCtaBtn.addEventListener('click', showRegistration);
});

// Функции
function handleMoodSubmit() {
  const userMood = moodInput.value.trim().toLowerCase();
  if (!userMood) return;

  // Простой анализ настроения
  let detectedMood = 'happy';
  if (userMood.includes('груст') || userMood.includes('печал')) detectedMood = 'sad';
  if (userMood.includes('устал') || userMood.includes('утомл')) detectedMood = 'relax';
  if (userMood.includes('злость') || userMood.includes('раздраж')) detectedMood = 'energetic';
  if (userMood.includes('работ') || userMood.includes('дел')) detectedMood = 'work';

  // Закрыть модальное окно
  moodModal.style.display = 'none';
  
  // Установить выбранное настроение
  currentMood = detectedMood;
  updateMoodTheme(currentMood);
  loadContentForMood(currentMood);
  
  // Сохранить в LocalStorage
  localStorage.setItem('userMood', userMood);
  localStorage.setItem('detectedMood', detectedMood);
}

function updateMoodTheme(mood) {
  document.body.className = `${mood}-theme`;
  const moodButton = document.querySelector(`.mood-buttons-row button[data-mood="${mood}"]`);
  if (moodButton) {
    moodTitle.textContent = moodButton.querySelector('span').textContent;
  }
}

function loadContentForMood(mood) {
  const moodContent = moodData[mood];
  
  // Загрузить треки
  currentPlaylist = moodContent.tracks;
  renderTracks(currentPlaylist);
  
  // Загрузить мемы
  currentMemeIndex = 0;
  renderMeme(moodContent.memes[0]);
  
  // Установить фоновую музыку
  backgroundAudio.src = moodContent.backgroundAudio;
  if (isSoundOn && audioElement.paused) backgroundAudio.play();
  
  // Обновить CTA
  dynamicCta.textContent = moodContent.cta;
  mainCtaBtn.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
  
  // Обновить прогресс-бар
  updateProgressBar(mood);
}

function renderTracks(tracks) {
  tracksContainer.innerHTML = '';
  tracks.forEach((track, index) => {
    const trackCard = document.createElement('div');
    trackCard.className = 'track-card';
    trackCard.innerHTML = `
      <img src="${track.cover}" alt="${track.title}">
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
    `;
    trackCard.addEventListener('click', () => playTrack(index));
    tracksContainer.appendChild(trackCard);
  });
}

function playTrack(index) {
  if (!currentPlaylist.length) return;

  currentTrackIndex = index;
  const track = currentPlaylist[index];

  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;
  audioElement.src = track.audio;
  audioElement.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function togglePlay() {
  if (audioElement.paused) {
    audioElement.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioElement.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function playPrev() {
  if (currentTrackIndex > 0) {
    playTrack(currentTrackIndex - 1);
  } else {
    playTrack(currentPlaylist.length - 1);
  }
}

function playNext() {
  if (currentTrackIndex < currentPlaylist.length - 1) {
    playTrack(currentTrackIndex + 1);
  } else {
    playTrack(0);
  }
}

function toggleSound() {
  isSoundOn = !isSoundOn;
  if (isSoundOn) {
    if (audioElement.paused) backgroundAudio.play();
    soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    soundToggle.title = 'Отключить фоновую музыку';
  } else {
    backgroundAudio.pause();
    soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    soundToggle.title = 'Включить фоновую музыку';
  }
}

function renderMeme(meme) {
  memeImage.src = meme.image;
  memeText.textContent = meme.text;
}

function loadNewMeme() {
  const memes = moodData[currentMood].memes;
  currentMemeIndex = (currentMemeIndex + 1) % memes.length;
  renderMeme(memes[currentMemeIndex]);
}

function initGame() {
  // Создаем пузыри с эмоциями
  const emotions = ['Стресс', 'Скука', 'Тревога', 'Усталость'];
  
  // Очищаем старые пузыри
  bubbles.forEach(bubble => bubble.remove());
  bubbles = [];
  
  // Создаем 5 пузырей
  for (let i = 0; i < 5; i++) {
    createBubble(emotions);
  }
}

function createBubble(emotions) {
  const emotion = emotions[Math.floor(Math.random() * emotions.length)];
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = emotion;
  bubble.dataset.emotion = emotion.toLowerCase();
  
  // Позиционируем случайным образом
  const size = Math.floor(Math.random() * 30) + 40;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * (gameContainer.offsetWidth - size)}px`;
  bubble.style.top = `${Math.random() * (gameContainer.offsetHeight - size)}px`;
  bubble.style.backgroundColor = getRandomColor();
  
  // Анимация плавания
  bubble.style.animation = `bubbleFloat ${Math.random() * 3 + 2}s infinite`;
  
  // Обработчик клика
  bubble.addEventListener('click', () => {
    // Эффект лопания
    bubble.style.transform = 'scale(1.2)';
    bubble.style.opacity = '0';
    setTimeout(() => {
      bubble.remove();
      bubbles = bubbles.filter(b => b !== bubble);
      
      // Обновляем счет
      score++;
      gameScore.textContent = score;
      
      // Создаем новый пузырь
      setTimeout(() => createBubble(emotions), 500);
    }, 300);
  });
  
  gameContainer.appendChild(bubble);
  bubbles.push(bubble);
}

function getRandomColor() {
  const colors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

function showPrevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
}

function showNextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}

function updateProgressBar(mood) {
  let progress = 50;
  let moodText = 'Нейтрально';
  
  switch(mood) {
    case 'happy':
      progress = 80;
      moodText = 'Радость';
      break;
    case 'sad':
      progress = 20;
      moodText = 'Грусть';
      break;
    case 'energetic':
      progress = 70;
      moodText = 'Энергия';
      break;
    case 'relax':
      progress = 40;
      moodText = 'Релакс';
      break;
    case 'work':
      progress = 100;
      moodText = 'Работа';
      break;
  }
  
  progressBar.style.width = `${progress}%`;
  progressText.textContent = moodText;
}

function handleSearch() {
  const query = document.querySelector('.search-bar input').value.trim();
  if (!query) return;
  
  // Здесь должна быть логика семантического поиска
  alert(`Поиск по запросу: "${query}"\n(В реальном приложении здесь будет семантический поиск)`);
}

function showTop10(e) {
  e.preventDefault();
  alert('Показываем топ-10 треков за сутки');
}

function showNewTracks(e) {
  e.preventDefault();
  alert('Показываем 5 самых новых композиций');
}

function showArtists(e) {
  e.preventDefault();
  alert('Показываем список исполнителей');
}

function showLogin(e) {
  e.preventDefault();
  alert('Показываем окно входа/регистрации');
}

function showRegistration() {
  alert('Показываем окно регистрации');
}

function shareToVK(e) {
  e.preventDefault();
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  const image = memeImage.src || '';
  const text = memeText.textContent || '';
  
  if (e.target.closest('.meme-actions')) {
    // Поделиться мемом
    window.open(`https://vk.com/share.php?url=${url}&title=${title}&image=${image}&description=${text}`, '_blank');
  } else {
    // Поделиться счетом из игры
    window.open(`https://vk.com/share.php?url=${url}&title=${title}&description=Я набрал ${score} очков в игре на muzZzZzon!`, '_blank');
  }
}

function shareToTelegram(e) {
  e.preventDefault();
  const url = encodeURIComponent(window.location.href);
  const text = memeText.textContent || '';
  
  if (e.target.closest('.meme-actions')) {
    // Поделиться мемом
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  } else {
    // Поделиться счетом из игры
    window.open(`https://t.me/share/url?url=${url}&text=Я набрал ${score} очков в игре на muzZzZzon!`, '_blank');
  }
}

// Автоматическое переключение темы по времени суток
function updateThemeByTime() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    document.body.classList.add('day-theme');
    document.body.classList.remove('night-theme');
  } else {
    document.body.classList.add('night-theme');
    document.body.classList.remove('day-theme');
  }
}

// Инициализация темы по времени
updateThemeByTime();
setInterval(updateThemeByTime, 60000); // Обновлять каждый час

// Проверка сохраненного настроения
window.addEventListener('load', () => {
  const savedMood = localStorage.getItem('detectedMood');
  if (savedMood) {
    currentMood = savedMood;
    updateMoodTheme(currentMood);
    loadContentForMood(currentMood);
  }
});