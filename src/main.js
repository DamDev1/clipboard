const copyText = document.querySelector(".btn")

copyText.addEventListener("click", () =>{
    const inputText = document.querySelector(".inputText")
    const popUp = document.querySelector(".popUp")

    if(inputText.value == ""){
        alert("input field can't be empty")
    }else{
        inputText.select()   
        inputText.setSelectionRange(0, 999999)

        navigator.clipboard.writeText(inputText.value)

        popUp.style.display = "block"

        setTimeout(Hello, 2000)

        function Hello(){
            popUp.style.display = "none"
        }
    }
})