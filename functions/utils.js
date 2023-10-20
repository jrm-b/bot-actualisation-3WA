export function getCurrentTime() {
    const date = new Date();
    return date;
};

export function delayBy5Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
};

export function getLetterDay(date) {
    let day;
    switch (date) {
        case 0: day = 'Dimanche'; break;
        case 1: day = 'Lundi'; break;
        case 2: day = 'Mardi'; break;
        case 3: day = 'Mercredi'; break;
        case 4: day = 'Jeudi'; break;
        case 5: day = 'Vendredi'; break;
        case 6: day = 'Samedi'; break;

    }
    return day
}

export function getDayGap(date) {
    let dayGap;
    switch (date.getDay()) {
        case 0: dayGap = 5; break;
        case 1: dayGap = 4; break;
        case 2: dayGap = 3; break;
        case 3: dayGap = 2; break;
        case 4: dayGap = 1; break;
        case 5: dayGap = 0; break;
        case 6: dayGap = 6; break;
    }
    return dayGap
}

export function addDaysToDate(date, dayGap) {
    let targetDate = new Date(date);
    targetDate.setDate(targetDate.getDate() + dayGap);
    return `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`;
}