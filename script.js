const captcha = document.querySelector(".captacha"),
reloadBtn = document.querySelector(".reload-btn"),
inoutField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha(){
    for(let i = 0; i< 6; i++){
       let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
       captcha.innerText += ` ${randomChar}`;
    }
}

reloadBtn.addEventListener("click", () => {
    captcha.innerText = "";
    getCaptcha();
});

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statusTxt.style.display ="block";
    let inputVal = inoutField.value.split('').join(' ');
    if(inputVal == captcha.innerText){
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerHTML = "You not Robot.";
        setTimeout(() => {
            statusTxt.style.display ="";
            inoutField.value = "";
            captcha.innerText = "";
            getCaptcha();
        }, 3000);
    }else{
        statusTxt.style.color = "#ff0000";
        statusTxt.innerHTML = "Captcha not matched. Please try again!";
    }
})

getCaptcha();