# language: ru
@desctop
Функция: Блок "Выбор редакции" должен работать корректно

    Предыстория:
        Пусть открыт сайт https://www.kinopoisk.ru
        И открыт блок "Выбор редакции"

    Сценарий: Отображение карточек
        Тогда отображаются карточки
        И у карточек есть картинки
        И есть корректная ссылка

    Сценарий: Прокрутка карточек
        Если нажать в карусели стрелку вправо
        То появляется стрелка прокрутки влево
        И появляются новые карточки
