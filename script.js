const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "x", "÷","-","+","="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== ""){
        let result = eval(output.replace("%","/100").replace(/x/g,"*").replace(/÷/g,"/"));
        output = parseFloat(result.toFixed(9));
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    }else if(btnValue === "theme-toggler"){
        container.classList.toggle("dark");
        themeToggleBtn.classList.x2
        toggle("active");
        isDark = !isDark;
    }else{
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }


    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

/*Change color*/
const themeToggleBtn = document.querySelector(".theme-toggler");
const contenedor = document.querySelector(".container");

themeToggleBtn.addEventListener("click", cambiarcolor);

function cambiarcolor(){
    contenedor.classList.toggle("theme-dark");
}