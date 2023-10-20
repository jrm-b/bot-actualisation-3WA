import { addDaysToDate, getCurrentTime, getDayGap, getLetterDay } from "./utils.js";

export function planification(jour, heure, minutes, callback){

    isGoodDay();

    function isGoodDay(){
        const now = new Date(getCurrentTime());
        const nowDay = now.getDay();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes();
        const nowSeconds = now.getSeconds();

        console.log(`Nous sommes le ${getLetterDay(now.getDay())} : ${now.toLocaleDateString()} ${now.getHours()}h${now.getMinutes()}`)
        console.log(`Actualisation prévue le ${getLetterDay(jour)} ${addDaysToDate(now,getDayGap(now)).toLocaleString()} à ${heure}h${minutes}`)

        if (nowDay.toLocaleString() == jour && nowHours.toLocaleString() == heure && nowMinutes.toLocaleString() == minutes) {
            callback();
        }
    }

    setInterval(isGoodDay, 60 * 1000);
}