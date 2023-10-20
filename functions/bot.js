import puppeteer from "puppeteer";
import { delayBy5Seconds } from "./utils.js"

export default async function Actualisation3WA () {
""
    const url = "https://tally.so/r/wbqDY2";
    const myEmail = "your_email@here.com";

    const textarea1 = "your_text_here";
    const textarea2 = "your_text_here";

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 1080, height: 1024 });

    // Starting

    const next = await page.waitForSelector('button.sc-4288e84c-1.dqAsFw');
    await next.click({ delay: 1000 });

    // Email page

    const email = await page.waitForSelector('input[type=email]')
    await email.type(myEmail,
        { delay: 100 })

    await next.click({ delay: 1000 });

    // First question page

    // Oui je veux partager mes contact
    const A = await page.waitForSelector('input[id=choice_ef449980-9da5-4f25-8012-8bbfc51d805f]');

    // Non mais j'ai un entretient bientôt
    const B = await page.waitForSelector('input[id=choice_875e105f-f587-4416-ad8c-a41aeb869236]');

    // Non je n'ai pas eu de contact
    const C = await page.waitForSelector('input[id=choice_28306771-bb8f-41ab-bd45-7f76e24c2c62]');

    await C.click({ delay: 1000 });
    await next.click({ delay: 1000 });

    // Last page

    // Avez vous besoin d'un coaching ?
    const yes1 = await page.waitForSelector('input[id=choice_cba77dc9-b9bb-4fcb-ab33-b9c9138b9337]');
    const no1 = await page.waitForSelector('input[id=choice_2fd99fc1-fb4b-4134-8779-24afcdf11a05]');

    await no1.click({ delay: 1000 });

    // Souhaitez vous nous adresser un message ?
    const yes2 = await page.waitForSelector('input[id=choice_7479380e-ad71-4edf-a9a1-a5c50653f869]');
    const no2 = await page.waitForSelector('input[id=choice_4c61dad4-dbc2-4d64-82e5-bc15f2f9e76a]');

    await no2.click({ delay: 1000 });

    // A quel point êtes vous satisfait de cette semaine?

    // Stars
    const star1 = await page.waitForSelector('input[id=star_cfc051d3-2908-4909-96aa-0cc148740cd5_1]');
    const star2 = await page.waitForSelector('input[id=star_cfc051d3-2908-4909-96aa-0cc148740cd5_2]');
    const star3 = await page.waitForSelector('input[id=star_cfc051d3-2908-4909-96aa-0cc148740cd5_3]');
    const star4 = await page.waitForSelector('input[id=star_cfc051d3-2908-4909-96aa-0cc148740cd5_4]');
    const star5 = await page.waitForSelector('input[id=star_cfc051d3-2908-4909-96aa-0cc148740cd5_5]');

    await star4.click({ delay: 1000 });

    // Textarea
    await page.evaluate((textarea1) => {
        document.getElementById('36c1f1cc-0fdf-4ddb-98a8-e4851556782d').innerText = textarea1;
    },textarea1);

    // Avez vous d'autre infos à partager ?

    await delayBy5Seconds().then(() => {
        page.evaluate((textarea2) => {
            document.getElementById('b10e3e00-983f-4625-90e1-93ab2504e534').innerText = textarea2;
        }, textarea2);
    })


    // Validation
    const validate = next;
    await validate.click();

    console.log('Actualisation challenge alternance réussis.');
    
    // await delayBy5Seconds().then(() => {
    //     browser.close();
    // })
};