let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '='){
            let result = eval(string);
            if (result >= 1e12 || result <= -1e12) {
                result = result.toExponential(4); // Convert to scientific notation with 4 decimal places
            }
            input.value = result;
            string = result.toString();
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
});
