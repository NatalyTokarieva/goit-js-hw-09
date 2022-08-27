
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');



// startButton.addEventListener('click', () => {
//     const interval = setInterval(() => {
//        document.body.style.backgroundColor = getRandomHexColor();
//     } , 1000);
//     stopButton.addEventListener('click', () => {
//         clearInterval(interval);
//         onButtonClick();
//         } );
// }
// );

let intervalId = null;  //таймер( идентифікатор, якщо хочему викликати в іншому місті)


const onStartChangeColor = (e) => {
    onButtonClick()
intervalId = setInterval(() => {
    
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);}

    
const onStopChangeColor = (e) => {
    clearInterval(intervalId);
    onButtonClick()
}
    
    

function onButtonClick(){
    if(!startButton.disabled){
        startButton.disabled = true;
        stopButton.disabled = false;
    }else{
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}


startButton.addEventListener('click', onStartChangeColor);
stopButton.addEventListener('click', onStopChangeColor);

