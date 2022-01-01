import Markup from 'telegraf/markup.js'

export function getDomen() {
    return (
        '<i>Поиск по сайту</i>.\n'+
        '1. xinit.ru (xinit.ru/whois/) — тотальный скан сайта по всем направлениям.\n'+
'2. hunter.io — поиск email у сайта.\n'+
'3. @WhoisDomBot — узнайте информацию об домене.\n'+
'4. riskiq.com (r) — автоматизированный поиск по всем фронтам.\n'+
'5. Knock Subdomain Scan (github.com/guelfoweb/knock) (t) — находит субдомены и FTP.\n'+
'6. builtwith.com — технологический профиль сайта, взаимосвязи между сайтами.\n'+
'7. crimeflare.org (www.crimeflare.org:82/cfs.html) — cloudflare раскрыватель.\n'+
'8. cyber-hub.net (cyber-hub.net/domain_resolver.php) — распознаватель cloudflare, статус DNS, перебор поддоменов и многое другое.\n'+
'9. suip.biz (suip.biz/ru/?act=amass) — быстрый и мощный поиск субдоменов, найдет все.\n'+
'10. urlscan.io — сервис для сканирования и анализа сайтов.\n'+
'11. dnsdumpster.com — инструмент исследования домена который может обнаружить хосты связанные с доменом.\n'+
'12. cachedview.com — поиск по кэшу Googlev.\n'+
'13. recon.secapps.com (recon.secapps.com/) — автоматический поиск и создание карт взаимосвязей.\n'+
'14. censys.io — находит какие серверы и устройства выставлены в сети.\n'+
'15. virustotal.com — служба пассивного DNS, поиск суб-доменов, поиск в whois и история сертификатов SSL.\n'+
'16. atsameip.intercode.ca — найдет одинаковые IP у сайта, можно узнать субдомены.\n'+
'17. spiderfoot.net (r) — автоматический поиск с использованием огромного количества методов, можно использовать в облаке если пройти регистрацию.\n'+
'18. oldweb.today —  просмотреть исторические версии сайтов, можно выбрать вид браузера и дату.\n'+
'19. crimeflare.net (crimeflare.net:83/repeats.html) — дает возможность узнать настоящий IP адрес сайта за CloudFlare.\n'+
'20. dirhunt (github.com/Nekmo/dirhunt) (t) — поиск директорий сайта без брута.\n'+
'21. Amass (github.com/OWASP/Amass) (t) — сетевое картирование поверхностей атаки и обнаружение внешних ресурсов с использованием методов сбора информации с открытым исходным кодом и активных методов разведки.\n'+
'22. Photon (github.com/s0md3v/Photon) (t) — найдет на сайте файлы, секретные ключи, JS файлы, URL с параметрами.\n'+
'23. spyse.com (spyse.com/search/subdomain) — поиск поддоменов.\n'+ 
'24. webcookies.org — анализ cookies сайта.\n'+
'25. dnslytics.com (dnslytics.com/reverse-analytics) — сайт помогает найти трекеры на сайте.\n'+
'26. domainwat.ch — может искать информацию такую как имя регистранта, адрес, номер телефона, адрес электронной почты из информации WHOIS и историю изменений.\n'+
'27. findomain (github.com/Edu4rdSHL/findomain) (t) — ищет поддомены.\n'+
'28. yuleak.com (r) — найдет серверы, домены, поддомены, услуги, darkweb, пароли, уязвимости, идентификаторы и многое другое.\n'+
'29. shodan.io — найдет IP адреса и сайты с упоминанием искомого сайта.\n'+
'30. phonebook.cz — найдет e-mails, субдомены, директории сайта.\n'+
'31. visualsitemapper.com (www.visualsitemapper.com/) — визуализация карты сайта одним грфиком.\n'+
'_____________________________________________\n'+
'<i>Поиск через URL</i>.\n'+
'_____________________________________________\n'+
'1. www.reddit.com/domain/example.com — покажет где на reddit был упомянут сайт, замените example.com.\n'+
'2. api.hackertarget.com/pagelinks/?q=http://example.com — все ссылки на странице сайта, замените example.com.\n'+
'3. www.google.com/search?q=site%3A*.example.com — найдет поддомены сайта, замените example.com.\n'+
     '_____________________________________________\n'+
        '<b>НАШ ТЕЛЕГРАММ КАНАЛ https://t.me/bigduglasTM</b>'
     )
    }
