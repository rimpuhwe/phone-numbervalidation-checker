const enteredInput = document.getElementById('user-input');
const checkerBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultpage = document.getElementById('results-div');


const regexRule = (word) =>{
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/gi;
    return regex.test(word);
}
checkerBtn.addEventListener('click', () =>{
    const number = '' + enteredInput.value;

    if (enteredInput.value == ''){
        alert('insert your phone number please');
        return;
    }
    else if(regexRule(number)){
        resultpage.innerHTML = `
        <p class="green">valid number:<br>${number}</p>   `
    }
    else{
        resultpage.innerHTML = `
        <p class="red">invalid number:<br>${number}</p>`
    }
})

clearBtn.addEventListener('click',()=>{
    resultpage.innerHTML="";
    enteredInput.value = "";
})
