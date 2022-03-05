
window.addEventListener("scroll" , function(){
    console.log("widow is scrolling")
    if(this.document.documentElement.scrollTop > 700)
    {
        var counter_1 = document.getElementById("counter_1")
        var i1=300 
        var set_1 = setInterval(()=>{
            console.log(i1)
            if(i1 == 8000){
                clearInterval(set_1)
            }
            else{
                i1+=100;
                counter_1.innerText = i1
            }
        } , 10)


        var counter_2 = document.getElementById("counter_2")
        var i2=30 
        var set_2 = setInterval(()=>{
            console.log(i2)
            if(i2 == 810){
                clearInterval(set_2)
            }
            else{
                i2+=10;
                counter_2.innerText = i2
            }
        } , 10)


        var counter_3 = document.getElementById("counter_3")
        var i3=250
        var set_3 = setInterval(()=>{
            console.log(i3)
            if(i3 == 2000){
                clearInterval(set_3)
            }
            else{
                i3+=50;
                counter_3.innerText = i3
            }
        } ,25)



        var counter_4 = document.getElementById("counter_4")
        var i4=0 
        var set_4 = setInterval(()=>{
            console.log(i4)
            if(i4 == 20){
                clearInterval(set_4)
            }
            else{
                i4++;
                counter_4.innerText = i4
            }
        } , 40)
    }
})    




/* form */
form.addEventListener("input" ,function(e){
    switch (e.target.id) {
        case "Name":
            console.log(e.target.value)
            nameValidation(e.target)
            break;
        case "userEmail":
            emailValidation(e.target)

            break;
        case "userpassword":
            passwordValidation(e.target)
            break
    }
})

function nameValidation(input) {
    var inputValue = input.value.trim()
    if (inputValue.length < 3) showError(input, "Please enter at least 3 character")
    else removeError(input)
}

function emailValidation(input) {
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    console.log(regExp.test(input.value))
    if (regExp.test(input.value) == false) showError(input, "The e-mail address entered is invalid.")
    else removeError(input)
}

function passwordValidation(input) {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    console.log(strongRegex.test(input.value))
    if (strongRegex.test(input.value)) removeError(input)
    else showError(input, "Please enter astrong password")

}

function nameValidation(input) {
    var inputValue = input.value.trim()
    if (inputValue.length < 25) showError(input, "Please enter at least 25 character")
    else removeError(input)
}



function showError(inputElement, msg) {
    var error = inputElement.nextElementSibling
    error.innerText = msg
    error.classList.remove("d-none")
    error.classList.add("text-danger")
}

function removeError(inputElement) {
    var error = inputElement.nextElementSibling
    error.classList.add("d-none")
}



form.addEventListener("submit" ,function(e){
    e.preventDefault()
    console.log(e)

})



