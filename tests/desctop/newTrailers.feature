# language: ru

Функция: Блок "Новые трейлеры" должен работать корректно

    Предыстория:
        Пусть открыт сайт https://www.kinopoisk.ru

    Сценарий: Отображение карточек
        Тогда отображаются карточки
        И у карточек есть картинки
        И есть корректные названия
        И есть корректный жанр
        И есть корректный год
        И есть корректная ссылка
        И есть корректный рейтинг

    Сценарий: Прокрутка карточек
        Если нажать в карусели стрелку вправо
        То появляются новые карточки
        И появляется стрелка прокрутки влево

    Сценарий: Появление всплывающего превью
        Если навести курсор на название фильма
        То слева снизу появляется всплывающее превью
        И название фильма в превью соответствует названию, на которое наведен курсор

    Сценарий: Работа кнопки запуска видео
        Если нажать кнопку запуска видео
        То откроется виджет с плеером