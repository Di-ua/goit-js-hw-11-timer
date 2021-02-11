class CountdownTimer { 
    constructor(timerID,year,month,day) {
    this.selector = timerID;
    this.targetDate = (new Date(year,month,day)).getTime();
    }
}
const date = new CountdownTimer('#timer-1', 2021, 2, 8);
const timerRef = document.querySelector(date.selector)
const dayRef = timerRef.querySelector('span[data-value="days"]');
const hoursRef = timerRef.querySelector('span[data-value="hours"]');
const minsRef = timerRef.querySelector('span[data-value="mins"]');
const secsRef = timerRef.querySelector('span[data-value="secs"]');


setInterval(()=>{
   // if (secs===0 && mins===0 && hours===0 && days===0) {
   //    document.getElementById("countdown").className = "hidden";
   //    document.getElementById("deadline-message").className = "visible";
   //    document.getElementById("timer-1").className = "hidden";
   //    clearInterval(date);
   //    return true;
   // }
    const time = date.targetDate - Date.now();

    
    /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    /*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    /*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */ 
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    dayRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
    }, 1000);