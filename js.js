const result = document.getElementById('input');
let hasCalculated = false

addEventListener('click', e =>{
    console.log(e.target.value);
    switch(e.target.value){
        case 'AC':
            result.innerHTML = '';
            break;
        
        case 'DEL':
            result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1)
            break;

        case '=':
            const screen = result.innerHTML;            
            result.innerHTML = eval(screen);
            if(result.innerHTML == 'Infinity'){
                result.innerHTML = 'Wrong'
            }
            hasCalculated = true
            
            break;


        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            if(result.innerHTML=="" || result.innerHTML == 'Wrong'){
                result.innerHTML=''
            } else if(hasCalculated){
                hasCalculated = false;
                result.innerHTML += e.target.value;                  
            }
            else{
                result.innerHTML += e.target.value;  
            }
            break;

        case 'result':
            result.innerHTML = ''
            break;

        default:    
            if (hasCalculated) {
                hasCalculated = false
                result.innerHTML = ''
            }  
            result.innerHTML += e.target.value;         

    }
})










