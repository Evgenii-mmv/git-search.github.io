# GitHub Repository Search

Это веб-приложение позволяет искать репозитории GitHub, вводя полный или неполный логин в поисковую строку, если логин будет неполный, то появится dropdown с возможными вариантами выбора. Приложение использует API GitHub для поиска открытых репозиториев, соответствующих запросу, и отображает результаты.

## Используемые технологии

- **React** — популярная JavaScript-библиотека для построения пользовательских интерфейсов.
- **React Router Dom** — маршрутизационная библиотека для React, позволяющая осуществлять клиентскую маршрутизацию.
- **TypeScript** — статически типизированное надмножество JavaScript, добавляющее проверку типов и другие возможности языку.
- **Tailwind** — CSS-фреймворк для построения пользовательских интерфейсов.
- **Redux Toolkit (RTK)** — набор инструментов для упрощения разработки с Redux.
- **RTK Query** — библиотека для получения данных и кэширования в Redux, интегрирующаяся с RTK.

## Функции

- **Поиск репозиториев** — введите поисковый запрос в форму.
- **Просмотр списка репозиториев** — приложение отобразит список репозиториев, соответствующих запросу.
- **Переход по ссылке на репозиторий** — нажмите на название репозитория, чтобы просмотреть его детали на GitHub.
- **Сохранение репозиториев в избранное** — нажмите кнопку "Сохранить" рядом с репозиторием, чтобы добавить его в избранное и сохранить в `localStorage` для будущих сеансов.
- **Удаление репозиториев из избранного** — нажмите кнопку "Удалить" рядом с репозиторием, чтобы удалить его из избранного и из `localStorage`.

## Начало работы

Чтобы начать работу с проектом, выполните следующие шаги:

1. **Клонирование репозитория** — выполните команду `git clone https://github.com/your-username/repository-name.git`, чтобы клонировать проект на свой локальный компьютер.
2. **Установка зависимостей** — выполните команду `npm install`, чтобы установить необходимые зависимости.
3. **Запуск приложения** — выполните команду `npm start`, чтобы запустить приложение в режиме разработки.
