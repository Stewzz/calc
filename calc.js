const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        // Mengeksekusi program javascript yang ada di dalam string
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}
