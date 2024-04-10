// Dado un tiempo en formato de hora AM/PM conviertalo a hora militar (24 horas)

//12:00:00AM === 00:00:00 en un reloj de 24 horas

// 12:00:00PM === 12:00:00 en un reloj de 24 horas

// return un string que represente la horas en formato de 24

// s === tiempo en formato 12 horas deberia devolver a 24 horas (hh:mm:ss)



function timeConversion(s) {
    // Write your code here
    let hour = +(s.slice(0, s.indexOf(":")));
    const min = s.slice(s.indexOf(":") + 1, s.lastIndexOf(":"));
    const second = s.slice(s.lastIndexOf(":") + 1, -2);
    const time = s.charAt(8);

    if (time === "P" && hour !== 12) {
        hour += 12;
        hour = String(hour);
    } else if (time === "A" && hour === 12) {
        hour = "00";
    }

    hour = ("0" + hour).slice(-2);
    return `${hour}:${min}:${second}`;
}




console.log(timeConversion("04:59:59AM"));


function timeConversion2(s) {
    // Write your code here
    let hour = parseInt(s.substring(0, 2));
    const min = s.substring(3, 5);
    const second = s.substring(6, 8);
    const time = s.substring(8, 10);

    if (time === "PM") {
        hour = (hour === 12 ? hour : hour + 12);
    } else {
        hour = (hour === 12 ? 0 : hour);
    }

    hour = ("0" + hour).slice(-2);
    return `${hour}:${min}:${second}`;
}