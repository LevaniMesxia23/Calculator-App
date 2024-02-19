const buttons = document.querySelectorAll(".number")
const answer = document.querySelector(".answer")
const reset = document.querySelector(".reset")
const delButton = document.querySelector(".del")
const slider = document.querySelector(".slide")


slider.addEventListener("input", ()=>{

  const equals = document.querySelector(".equals")
  const calc = document.querySelector(".calc")
  const theme = document.querySelector(".theme")
  const toggleNums = document.querySelector(".toggle-nums")
  const answerBox = document.querySelector(".answerBox")
  const numbersBox = document.querySelector(".numbers-box")


  if(slider.value === "3"){
    document.body.style.background = "#17062A";

    answerBox.classList.add("answerBoxColor3");
    numbersBox.classList.add("numberBoxColor3");
    delButton.classList.add("delResetButtonColor3");
    reset.classList.add("delResetButtonColor3");
    slider.classList.add("slide3")

    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.add("buttonsColor3")
    }
  
    answer.classList.add("ansCalcThemeColor3");
    calc.classList.add("ansCalcThemeColor3");
    theme.classList.add("ansCalcThemeColor3");
    for(let i = 0; i < toggleNums.length; i++){
      toggleNums[i].classList.add("ansCalcThemeColor3")
    }
    equals.classList.remove("equalsColor")
    equals.classList.add("equalsColor3")

  } else if(slider.value === "2"){
    document.body.style.background = "#E6E6E6";
    

    answerBox.classList.remove("answerBoxColor3");
    numbersBox.classList.remove("numberBoxColor3");
    delButton.classList.remove("delResetButtonColor3");
    reset.classList.remove("delResetButtonColor3");
    slider.classList.remove("slide3")

    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("buttonsColor3")
   
    }
    equals.classList.remove("equalsColor3")
    answer.classList.remove("ansCalcThemeColor3");
    calc.classList.remove("ansCalcThemeColor3");
    theme.classList.remove("ansCalcThemeColor3");
    for(let i = 0; i < toggleNums.length; i++){
      toggleNums[i].classList.remove("ansCalcThemeColor3")
    }
    
    equals.classList.add("equalsColor")
    answerBox.classList.add("answerBoxColor2");
    numbersBox.classList.add("numberBoxColor2");
    delButton.classList.add("delResetButtonColor2");
    reset.classList.add("delResetButtonColor2");
    slider.classList.add("slide2");

    answer.classList.add("ansCalcThemeColor2");
    calc.classList.add("ansCalcThemeColor2");
    theme.classList.add("ansCalcThemeColor2");

    for(let i = 0; i < toggleNums.length; i++){
      toggleNums[i].classList.add("ansCalcThemeColor2")
    }

  }else if(slider.value === "1"){
    document.body.style.background = "#3A4663";
    answerBox.classList.remove("answerBoxColor3");
    numbersBox.classList.remove("numberBoxColor3");
    delButton.classList.remove("delResetButtonColor3");
    reset.classList.remove("delResetButtonColor3");
    slider.classList.remove("slide3")

    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("buttonsColor3")
    }

    answer.classList.remove("ansCalcThemeColor3");
    calc.classList.remove("ansCalcThemeColor3");
    theme.classList.remove("ansCalcThemeColor3");
    for(let i = 0; i < toggleNums.length; i++){
      toggleNums[i].classList.remove("ansCalcThemeColor3")
    }
    equals.classList.add("equalsColor")
    equals.classList.remove("equalsColor3")
    answerBox.classList.remove("answerBoxColor2");
    numbersBox.classList.remove("numberBoxColor2");
    delButton.classList.remove("delResetButtonColor2");
    reset.classList.remove("delResetButtonColor2");
    slider.classList.remove("slide2");

    answer.classList.remove("ansCalcThemeColor2");
    calc.classList.remove("ansCalcThemeColor2");
    theme.classList.remove("ansCalcThemeColor2");

    for(let i = 0; i < toggleNums.length; i++){
      toggleNums[i].classList.remove("ansCalcThemeColor2")
    }

  }

})
const symbols = ["+", "-", ".", "/", "x", "="]
let currentNumber = ""
let expression = ""
let string = ""
let array = Array.from(buttons)
array.forEach(button => {
  button.addEventListener("click", (event) => {
  let target = event.target.textContent
    if(target == "="){
      string = eval(string)
      answer.innerHTML = string
    } else {
      if (!isNaN(parseInt(target)) || target === ".") {
        currentNumber += target
      } else {
        if (currentNumber !== "") {
          expression += currentNumber
          currentNumber = ""
      }
      expression += target;
    }
    if(target == "x"){
      target = "*"
    }

    if(symbols.includes(target) && string == ""){

    }else{
      string += target
      answer.innerHTML = string
    }
  }
    
})

})

reset.addEventListener("click", () => {
  string = ""
  answer.innerHTML = "0"
});

delButton.addEventListener("click", () => {
  if(string.length > 0){
    string = string.slice(0, -1)
    answer.textContent = string
  }

})






