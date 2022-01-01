import express, { text } from 'express';
import { PORT, TOKEN } from './config.js'
import Telegraf from 'telegraf'
import session from 'telegraf/session.js'
import { accountNext, keyborProbivTel, yboardDuon, yesNoKeyboardDuo, teleNext, getMainMenu, yesAvto, yesNoKeyboard, yesAccount } from './keyboards.js'

import { addTask } from './db.js'
import Markup from 'telegraf/markup.js'
import {comHelp} from './command/commands.js'

// expressia js files

import {getAccount, getAccSoci } from './probiv/Accounat/account.js'
import {getTelePril, getTelePrilWind, getTeleSite, getTeleBot, getTelephoneBespl, getTelephoneBesplBotsi, getTelephoneBesplSite} from './probiv/Telephone/telephone.js'
import {getTelephone} from './probiv/Telephone/probiv_tel.js'
import {getBazdan} from './probiv/bazdan.js'
import { getObloko } from './probiv/obloko.js'
import {getNick} from './probiv/Nick.js'
import {getAdres} from './probiv/adres.js'
import {getBank} from './probiv/bank.js'
import {getBiometria} from './probiv/biometr.js'
import { getAvto, getAvtoUkr, getAvtoTad } from './probiv/Avto/avto.js'
import {getDoc} from './probiv/document.js'
import {getDomen} from './probiv/domen.js'
import {getEmail} from './probiv/email.js'
import {getFile} from './probiv/file.js'
import {getFio} from './probiv/fio.js'
import {getTransport} from './probiv/transport.js'
import {getPassword} from './probiv/password.js'
import {getTekst} from './probiv/tekst.js'
import {getPoiskovik} from './probiv/poiskovik.js'
import {getTreker} from './probiv/treker.js'
import {getTools} from './probiv/tools/tols.js'

import bdDb from './connection.js'
const Obj  = new bdDb()
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
})
console.log(Mer,BlogPost) 


const app = express()

const bot = new Telegraf(TOKEN)
const Menus = 'menu'


// реагирование бота на ввод пользователем

bot.use(session())
//------------------------help-----

bot.command('start', ctx => {
    ctx.replyWithHTML('<b>Братуха</b>'+
    ' Приветсвую тебя в <b>BigDuglasBot</b> version 0.0.1\n\n'+
    'Данный бот создан специально для пробива информации (индентификации личности) в сети интернет \n'+
    '_________________________________________\n' +
    '<b>ВЫБЕРИ КНОПКУ В МЕНЮ ЛИБО\n' +
          '<i>ВЫБЕРИ КОМАНДУ:\n</i>'+
    '_________________________________________\n'+
    '- <i> \/\help - Помощь </i></b>',
    
    
 getMainMenu())
 
})
bot.command('help', ctx => {
    ctx.replyWithHTML('<b>Данный бот предоставляет информацию о ресурсах через которые можно пробить,\n информацию\n <i>индентифицировать личности\n в сети интернет</i></b>\n'+
    '____________________________\n'+
    '<b>Навигация по боту, команды !</b>\n' +
    '____________________________\n' + 
    '\/\start- homes\n' +
    '____________________________\n' + 
    '\/\help - pomosh' )        
})

//-----------------inlinekeybord-------------------------
bot.hears('Главное меню', ctx => {
    ctx.deleteMessage(),
    ctx.reply(Menus)})

    //*************** */
    //---------------***
bot.hears('Номер телефона', ctx => {
    ctx.replyWithHTML ('<b>Выебери, что тебе необходимо ?</b>\n', yesNoKeyboard())
})
//------------inlinekey-telephon-----------------------------------------------------------
const telArr = ['RUS', 'UKR', 'ARM','TADJ',Menus]
  bot.action(telArr, ctx => {
    if (ctx.callbackQuery.data === 'RUS') {
        ctx.deleteMessage(),
        ctx.replyWithHTML('<i>Выбери способ пробива телефона ?</i>',keyborProbivTel())
        
        
     
     } else if ( ctx.callbackQuery.data === 'UKR') {
         ctx.replyWithHTML ('<b>Выбери через, что хочешь получить\n бесплатный мобильный номер ?</b>',yesNoKeyboardDuo()),
         ctx.deleteMessage()
        
         
 
     }  else if (ctx.callbackQuery.data === 'ARM') {
                 ctx.reply ('Армения')
                 ctx.deleteMessage()
     } else if (ctx.callbackQuery.data === 'TADJ') {
         ctx.reply('Таджикистан'),
         ctx.deleteMessage()
     } else { ctx.reply('Выбери кнопку в меню ниже',getMainMenu(),
     ctx.deleteMessage())
 
     } 
})
//*********inline__tele__duo******/ */
const telduoArr = ['RUSa', 'UKRa', 'Botsi','no_down', 'rno_do','pril','prilWin', 'site', 'Bbotsi', 'noex','noex_mo']
  bot.action(telduoArr, ctx => {
    if (ctx.callbackQuery.data === 'RUSa') {
        ctx.replyWithHTML(keyborProbivTel())
        ctx.deleteMessage(),
        ctx.replyWithHTML('<i>Вернуться назад к выбору</i>\n', yboardDuon())
     
     } else if ( ctx.callbackQuery.data === 'UKRa') {
         ctx.replyWithHTML (getTelephoneBesplSite()),
         ctx.deleteMessage(),
         ctx.replyWithHTML('<i>Вернуться назад к выбору</i>\n',yboardDuon())
         
 
     }   else if (ctx.callbackQuery.data === 'Botsi') {
         ctx.reply(getTelephoneBesplBotsi()),
         ctx.deleteMessage(),
         ctx.replyWithHTML('<i>Вернуться назад к выбору</i>\n',yboardDuon()) 

     } else if  (ctx.callbackQuery.data === 'no_down')
      {
        ctx.replyWithHTML ('<i>Выбери через, что хочешь получить\n бесплатный мобильный номер ?</i>',yesNoKeyboardDuo()),
        ctx.deleteMessage()
     }
        
        else if (ctx.callbackQuery.data === 'rno_do') {
            ctx.replyWithHTML ('<b><i>Выбери, что нужно сделать ?</i></b>',yesNoKeyboard()),
            ctx.deleteMessage()
        }
        else if (ctx.callbackQuery.data === 'pril') {
            ctx.replyWithHTML (getTelePril()),
            ctx.deleteMessage(),
            ctx.replyWithHTML('<b>Что бы аернуться нажми кнопку !</b>',teleNext())

        }
        else if (ctx.callbackQuery.data === 'Bbotsi') {
            ctx.deleteMessage(),
            ctx.replyWithHTML (getTeleBot()),
            
            ctx.replyWithHTML('<b>Что бы вернуться нажми кнопку !</b>', teleNext())

        }
        else if (ctx.callbackQuery.data === 'prilWin') {
            ctx.replyWithHTML (getTelePrilWind()),
            ctx.deleteMessage(),
            ctx.replyWithHTML('<b>Что бы аернуться нажми кнопку !</b>',teleNext())

        }
        else if (ctx.callbackQuery.data === 'site') {
            ctx.replyWithHTML (getTeleSite()),
            ctx.deleteMessage(),
            ctx.replyWithHTML('<b>Что бы аернуться нажми кнопку !</b>',teleNext())
            

        }
        else if (ctx.callbackQuery.data === 'noex') {
            ctx.replyWithHTML ('<b>Выебери, что тебе необходимо ?</b>',yesNoKeyboard()),
            ctx.deleteMessage()

        }
        else if (ctx.callbackQuery.data === 'noex_mo') {
           
            ctx.replyWithHTML ('<i>Выбери способ пробива телефона ?</i>',keyborProbivTel()),
            ctx.deleteMessage()
        }
     else { 

     }
})

//---------------------avto-----markkup--
bot.hears('Авто', ctx => {
    ctx.replyWithHTML('<b><i>Выбери каой страны автомобиль тебя интересует ?</i></b>', yesAvto())
})

//--avto-inline keybord 
const avtoArr = ['rusAv', 'ukrAv','tadAv', Menus]
  bot.action(avtoArr, ctx => {
    if (ctx.callbackQuery.data === 'rusAv') {
        ctx.replyWithHTML(getAvto())
        ctx.deleteMessage(),
        ctx.replyWithHTML('Какой страны ?', yesAvto())
     
     } else if ( ctx.callbackQuery.data === 'ukrAv') {
         ctx.reply(getAvtoUkr()),
         ctx.deleteMessage(),
         ctx.replyWithHTML('Какой страны ?', yesAvto())
 
     }  else if (ctx.callbackQuery.data === 'tadAv') {
         ctx.reply(getAvtoTad()),
         ctx.deleteMessage(),
         ctx.replyWithHTML('Какой страны ?', yesAvto())
     } else { ctx.reply('Выбери кнопку в меню снизу'),
     ctx.deleteMessage(),
     ctx.replyWithHTML(getMainMenu())
     } 
})
//----------------keybord markup------------------------
bot.hears('Аккаунт', ctx => {
    ctx.replyWithHTML('Выбери что тебя интересует ?', yesAccount()),
    ctx.deleteMessage()
})
//-----keybord---inline-accounts----
const accoArr = ['acc','add', 'acc_mo']
bot.action(accoArr, ctx => {
    if (ctx.callbackQuery.data === 'acc') {
        ctx.replyWithHTML(getAccount())
        ctx.deleteMessage(),
        ctx.replyWithHTML('Что бы вернуться к выбору нажми ',accountNext())
     
     } else if ( ctx.callbackQuery.data === 'add') {
         ctx.replyWithHTML (getAccSoci()),
         ctx.deleteMessage(),
         ctx.replyWithHTML('Что бы вернуться к выбору нажми ',accountNext())
     }
        else if (ctx.callbackQuery.data === 'acc_mo') {
            ctx.deleteMessage(),
            ctx.replyWithHTML ('Снова выбери, что тебя интересует?',yesAccount())
        }
         else { ctx.reply('Выбери кнопку в меню снизу'),
     ctx.deleteMessage(),
     ctx.replyWithHTML(getMainMenu())
     } 
})
bot.hears('Облоко', ctx => {
    ctx.replyWithHTML (getObloko())
})

bot.hears('E-mail', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getEmail())
})

bot.hears('ФИО', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getFio())
})
bot.hears('Биометрия', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getBiometria())
})
bot.hears('Адрес', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getAdres())
})
bot.hears('Ник', ctx => {
    ctx.reply('Поиск по нику\n',+ getNick())
})
bot.hears('Документ', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getDoc())
})
bot.hears('Домен', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getDomen())
})
bot.hears('Файл', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getFile())
})
bot.hears('Номер кошелька', ctx => {
    ctx.reply('Так передохни и покушай\n',+ getBank())
})
bot.hears('Базы', ctx => {
    ctx.replyWithHTML('<b>Базы данных</b>\n'+ ' ' +
    getBazdan())
})
bot.hears('Пароль', ctx => {
    ctx.replyWithHTML('<b>Сохраненые пароли</b>\n'+ ' ' +
    getPassword())
})

bot.hears('Текст', ctx => {
    ctx.replyWithHTML('<b>Сохраненые пароли</b>\n'+ ' ' +
    getPassword())
})
bot.hears('Трекер', ctx => {
    ctx.replyWithHTML('<b>Сохраненые пароли</b>\n'+ ' ' +
    getPassword())
})
bot.hears('Поисковики', ctx => {
    ctx.replyWithHTML('<b>Сохраненые пароли</b>\n'+ ' ' +
    getPassword())
})


// ---------------------------------
bot.hears('Инструменты', ctx => {
    ctx.replyWithHTML('<b>Сохраненые пароли</b>\n'+ ' ' +
    getPassword())
})

bot.hears('Hacker Cannal', ctx => {
    ctx.reply('vcxv', yesNoKeyboard())
}),



bot.hears('Hacker Cannal', ctx => {
    ctx.reply('@bigduglasTM')
})
//-------------------

bot.on('text', ctx => {
    ctx.replyWithHTML('Братуха, такой команды нет, выбери команду из списка !')
  
       
})// все остальные 


bot.launch()
app.listen(PORT, ()=> console.log(' Server working on port ${PORT} '))