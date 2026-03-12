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
├── .github/
│   └── workflows/
│       └── deploy.yml
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

## Локальный запуск

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Деплой на GitHub Pages

1. Убедитесь, что репозиторий называется **Bekish** (или обновите `base` в `vite.config.js`).
2. В `vite.config.js` уже задано `base: '/Bekish/'` для корректной загрузки ассетов на Pages.
3. Workflow `.github/workflows/deploy.yml` автоматически:
   - собирает проект (`npm install && npm run build`),
   - публикует **только `dist/`** как Pages artifact,
   - деплоит сайт через `actions/deploy-pages`.
4. В GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
5. После пуша в `main` сайт будет доступен по адресу:
   - `https://bekish-kakish.github.io/Bekish/`

## Управление

- **Desktop:** стрелки или `W/A/S/D`
- **Пауза:** `Space`
- **Рестарт:** `R`
- **Mobile:** touch-кнопки на экране
