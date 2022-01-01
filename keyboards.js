import Markup from 'telegraf/markup.js'
//----global-buttons------------
export function getMainMenu() {
    return Markup.keyboard([
        ['Номер телефона', 'Авто', 'Аккаунт'],
        ['ФИО','Биометрия','Адрес'],
        ['Ник','Облоко','Документ'],
        ['Домен','Файл','Номер кошелька'],
        ['Базы','E-mail','Пароль'],
        ['Текст','Трекер','Поисковики'],
        
        ['Hacker Cannal', 'Инструменты']
    ]).resize().extra()
}
//----Global-buttons----------

//-----Avto----------------
export function yesAvto() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Russia', 'rusAv'),
    Markup.callbackButton('Украина', 'ukrAv'),
    Markup.callbackButton('Таджикистан\n', 'tadAv'),
    Markup.callbackButton('Главное меню', 'menu')
        ], {columns: 3}).extra()
}
export function yesAccount() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Соц_Сети', 'acc'),
    Markup.callbackButton('Мессенджеры', 'add'),
    Markup.callbackButton('Главное меню', 'menu')
        ], {columns: 3}).extra()
}
//---- telep--
export function yesNoKeyboard() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Пробив', 'RUS'),
    Markup.callbackButton('Бесплатные номера\n', 'UKR'),
    //Markup.callbackButton('Армения', 'ARM'),
    //Markup.callbackButton('Таджикистан\n', 'TADJ'),
    Markup.callbackButton('Главное меню', 'menu')
        ], {columns: 2}).extra()
}
export function yesNoKeyboardDuo() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Приложение', 'RUSa'),
    Markup.callbackButton('Сайт', 'UKRa'),
    Markup.callbackButton('Бот\n', 'Botsi'),
    Markup.callbackButton('Назад', 'rno_do')
        ], {columns: 2}).extra()
}
export function keyborProbivTel() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Моб_Приложение', 'pril'),
    Markup.callbackButton('ПК_Приложение', 'prilWin'),
    Markup.callbackButton('Сайт', 'site'),
    Markup.callbackButton('Бот\n', 'Bbotsi'),
    Markup.callbackButton('Назад', 'noex')
        ], {columns: 2}).extra()
}
//------DOWN-----Inline-Buttons---------
export function teleNext() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Назад', 'noex_mo')
        ], {columns: 1}).extra()
}
export function accountNext() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Назад', 'acc_mo')
        ], {columns: 1}).extra()
}
export function yboardDuon() {
    return Markup.inlineKeyboard (
        [
    Markup.callbackButton('Назад', 'no_down')
        ], {columns: 1}).extra()
}
//-----------DOWN------------------------

