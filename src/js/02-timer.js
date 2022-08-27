// Описан в документации
// import flatpickr from "flatpickr";
// // Дополнительный импорт стилей
// import "flatpickr/dist/flatpickr.min.css";

const timer = {
    start(){
const startTime = Date.now();
setInterval(() => {
    const currentTime = Date.now();

    const deltaTime = currentTime - startTime;
    const {hours, mins, secs} = getTimeComponents(deltaTime);

    // console.log('start -> currentTime', currentTime);
// console.log(timeComponents)
console.log(`${hours}:${mins}:${secs}`) //правильній вівод
    //console.log(currentTime - startTime);
    
},1000)
 },
};

timer.start()

//getUTCHours() - greenwitch- 0 paralel
//функция которая
//Принимает время в милисекундах
//Вісчитівает сколько в них вмещается часов\минут\секунд
//Повертає: обьєкт з властивостями hours, mins. secs
// Адская копипаста со стека

function pad(value){  //получает число и добавляет к нему знаки и приводит к строке  если берет 1 возвращает 01, 
    return String(value).padStart(2, '0');

}


function getTimeComponents(time){
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
);
    

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {hours, mins, secs};
}

// const options = {
    // enableTime: true, //Включает выбор времени
//     time_24hr: true, //Отображает средство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
//     defaultDate: new Date(), //Начальное значение элемента часа.
//     minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
    // onClose(selectedDates) {  //Функция(и) для запуска при каждом закрытии календаря. 
//       console.log(selectedDates[0]);
//     },
//   };



// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}