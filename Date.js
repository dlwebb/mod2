/**
 * Created by Administrator on 6/17/14.
 */

var date = new Date();
console.log("Date Obj", date);
console.log("Show Date", showDate(date));
console.log("Show Time", showTime(date));
console.log("Calc Days", calcDays(date));

function showDate(dateObj) {
    thisDate = dateObj.getDate();
    thisMonth = dateObj.getMonth()+1;
    thisYear = dateObj.getFullYear();
    return thisMonth + "/" + thisDate + "/" + thisYear;
}

function showTime(dateObj) {
    thisSecond=dateObj.getSeconds();
    thisMinute=dateObj.getMinutes();
    thisHour=dateObj.getHours();

    // change thisHour from 24-hour time to 12-hour time by:
    // 1) if thisHour < 12 then set ampm to " a.m." otherwise set it to " p.m."
    var ampm = (thisHour < 12) ? " a.m." : " p.m.";

    // 2) subtract 12 from the thisHour variable
    thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;

    // 3) if thisHour equals 0, change it to 12
    thisHour = (thisHour == 0) ? 12 : thisHour;

    // add leading zeros to minutes and seconds less than 10
    thisMinute = thisMinute < 10 ? "0"+thisMinute : thisMinute;
    thisSecond = thisSecond < 10 ? "0"+thisSecond : thisSecond;

    return thisHour + ":" + thisMinute + ":" + thisSecond + ampm;
}

function calcDays(currentDate) {
    // create a date object for January 1 of the next year
    newYear = new Date("January 1, 2011");
    nextYear = currentDate.getFullYear()+1;
    newYear.setFullYear(nextYear);

    // calculate the difference between currentDate and January 1
    days = (newYear - currentDate)/(1000*60*60*24);

    return days;
}
