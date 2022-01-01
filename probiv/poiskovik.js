import Markup from 'telegraf/markup.js'

export function getPoiskovik() {
    return (
        '<i>Поиск через URL</i>.\n'+
        '1. https://www.yandex.ru/yandsearch?text=%22id123456789%22 — поиск упоминания ID страницы на других сайтах. Замените 123456789 на ID аккаунта VK.\n'+
    '2. https://online-vk.ru/pivatfriends.php?id=123456789 — поиск друзей закрытого аккаунта, замените 123456789 на ID аккаунта VK.\n'+
    '3. https://vk.com/feed?obj=ID&q=&section=mentions — упоминания аккаунта.\n'+
    'Замените ID на ID аккаунта VK.\n'+
    '4. https://ruprofile.pro/vk_user/id12345 — сохраненная информация об аккаунте за 2017-18 год, замените 12345 на ID аккаунта VK.\n'+
    '5. https://rusfinder.pro/vk/user/id12345 — сохраненная информация об аккаунте за 2017-18 год, замените 12345 на ID аккаунта VK.\n'+

     '_____________________________________________\n'+
        '<b>НАШ ТЕЛЕГРАММ КАНАЛ https://t.me/bigduglasTM</b>'
     )
    }
