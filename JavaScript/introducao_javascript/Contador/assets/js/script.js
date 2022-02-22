
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
            
    if(currentNumber >= -1) { document.getElementById("currentNumber").style.color = "black";}
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    var aceitaNegativo = new Boolean(true);
    aceitaNegativo = document.getElementsByName("negativo")[0].checked;

    if ( aceitaNegativo === false && currentNumber >= 1 ) { 

        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else if (aceitaNegativo === true) {
        
        if(currentNumber <= 0) { document.getElementById("currentNumber").style.color = "red";}
        
        console.log("aqui");
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        }
    
}


function disableButtom(){
    console.log("disableButtom")
    if(currentNumber >= 10){
        
        element.disabled = true;
    }else{
        element.disabled = false;
    }
    
}


const element = document.getElementsByName("adicionar")[0];
element.addEventListener("click", disableButtom());
