class GlowEffectsManager {
  constructor(options = {}) {
    this.options = {
      glowSize: options.glowSize || 200,
      minDistance: options.minDistance || 300, // Мінімальна відстань між ефектами
      effectsPerSection: options.effectsPerSection || 3, // Кількість ефектів на кожні 1000px висоти
      sectionHeight: options.sectionHeight || 1000, // Висота секції в пікселях
      containerSelector: options.containerSelector || 'body'
    };
    
    this.container = document.querySelector(this.options.containerSelector);
    this.effects = [];
    
    // Створюємо стилі
    this.createStyles();
    
    // Ініціалізуємо ефекти
    this.init();
    
    // Додаємо слухач на зміну розміру вікна
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  createStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .glow-effect {
        position: absolute;
        width: ${this.options.glowSize}px;
        height: ${this.options.glowSize}px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
        filter: blur(100px);
        opacity: 0.6;
        pointer-events: none;
        transition: transform 0.5s ease;
        animation: glowAnimation 7s infinite alternate;
      }

      @keyframes glowAnimation {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(50px, 50px);
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  generateRandomPosition(maxWidth, maxHeight, existingPositions) {
    let attempts = 0;
    const maxAttempts = 50;
    
    while (attempts < maxAttempts) {
      const x = Math.random() * (maxWidth - this.options.glowSize);
      const y = Math.random() * (maxHeight - this.options.glowSize);
      
      // Перевіряємо, чи нова позиція достатньо далеко від існуючих
      const isFarEnough = existingPositions.every(pos => {
        const distance = Math.sqrt(
          Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2)
        );
        return distance >= this.options.minDistance;
      });
      
      if (isFarEnough || attempts === maxAttempts - 1) {
        return { x, y };
      }
      
      attempts++;
    }
  }

  createGlowEffect(x, y) {
    const effect = document.createElement('div');
    effect.className = 'glow-effect';
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    return effect;
  }

  init() {
    this.updateEffects();
  }

  updateEffects() {
    // Видаляємо всі існуючі ефекти
    this.effects.forEach(effect => effect.remove());
    this.effects = [];
    
    const containerHeight = Math.max(
      this.container.scrollHeight,
      this.container.clientHeight
    );
    const containerWidth = this.container.clientWidth;
    
    // Розраховуємо кількість потрібних ефектів базуючись на висоті
    const numberOfSections = Math.ceil(containerHeight / this.options.sectionHeight);
    const totalEffects = numberOfSections * this.options.effectsPerSection;
    
    const existingPositions = [];
    
    // Створюємо нові ефекти
    for (let i = 0; i < totalEffects; i++) {
      const position = this.generateRandomPosition(
        containerWidth,
        containerHeight,
        existingPositions
      );
      
      existingPositions.push(position);
      const effect = this.createGlowEffect(position.x, position.y);
      this.container.appendChild(effect);
      this.effects.push(effect);
    }
  }

  handleResize() {
    // Використовуємо debounce для оптимізації
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.updateEffects();
    }, 150);
  }
}

// Експортуємо клас для використання
export default GlowEffectsManager;