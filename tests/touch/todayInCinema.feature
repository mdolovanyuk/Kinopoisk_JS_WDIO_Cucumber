# language: ru
@try @touch
Функция: Блок "Смотрите в кино" должен работать корректно

    Предыстория:
        Пусть открыт сайт https://www.kinopoisk.ru
        И открыт блок "Смотрите в кино"

    Сценарий: Отображение карточек
        Тогда отображаются карточки
        И у карточек есть картинки
        И есть корректные названия
        И есть корректный жанр
        И есть корректный год
        И есть корректная ссылка
        И есть корректный рейтинг

#    Сценарий: Прокрутка карточек
#        Если нажать в карусели стрелку вправо
#        То появляется стрелка прокрутки влево
#        И появляются новые карточки

#    Сценарий: Появление всплывающего превью
#        Если навести курсор на название фильма
#        То слева снизу появляется всплывающее превью
#        И название фильма в превью соответствует названию, на которое наведен курсор

    Сценарий: Наличие кнопки для покупки билетов
        Если навести курсор на кнопку с билетами
        То появляется большая кнопка с надписью "Билеты"
        И у кнопки есть корректная ссылка
