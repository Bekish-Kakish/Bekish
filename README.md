# Bekish Snake — Neon Edition

Ультрасовременный игровой лендинг + мини-игра Snake на **React + Vite** в стиле premium cyberpunk UI.

## Что реализовано

- Тёмный футуристичный интерфейс с неоновым свечением и glassmorphism-панелями.
- Красивый стартовый экран и визуальный игровой лендинг.
- Полноценная игра Snake с:
  - плавным игровым циклом;
  - подсчётом Score;
  - сохранением High Score в `localStorage`;
  - состояниями `idle / running / paused / over`;
  - паузой и рестартом.
- Адаптивный интерфейс и мобильный control pad.
- Micro-interactions: hover/press анимации, неоновые подсветки, пульсация еды.
- Чистая архитектура с компонентами, hook-логикой и утилитами.

## Технологии

- React 18
- Vite 5
- CSS (custom, без UI-framework)

## Структура проекта

```text
Bekish/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── ControlPad.jsx
│   │   ├── GameBoard.jsx
│   │   └── Hud.jsx
│   ├── hooks/
│   │   └── useSnakeGame.js
│   └── utils/
│       ├── constants.js
│       └── gameUtils.js
└── README.md
```

## Запуск

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Управление

- **Desktop:** стрелки или `W/A/S/D`
- **Пауза:** `Space`
- **Рестарт:** `R`
- **Mobile:** touch-кнопки на экране

## Готовность к деплою

Проект настроен как стандартный production-ready Vite SPA.
Можно деплоить в Vercel, Netlify, GitHub Pages (через build-output).
