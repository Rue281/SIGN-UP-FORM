let form = document.getElementById("serviceForm");
let password = document.getElementById("password");
let passwordConfirmation = document.getElementById("confirmPassword");
let btn = document.getElementById("submitBtn");

//checking password & password confirmation inputs for matching
function checkPasswordMatching(){
    if(password.value != passwordConfirmation.value)
        {return false;}
        else{return true;}
}

btn.addEventListener("click",function(){

   if(!checkPasswordMatching()){
    let warningMsg = document.createElement("h2");
    warningMsg.innerHTML = "Passwords doesn't match";
    form.insertBefore(warningMsg,btn);

    //enable button click
    btn.disabled = true;

    passwordConfirmation.focus();
    passwordConfirmation.onkeyup = function(){
        checkPasswordMatching();
        btn.disabled = false;
    }
    
   }
   else{return true;}

});

//prevent form from submit in case passwords doesn't match
form.addEventListener("submit",function(event){
    if(!checkPasswordMatching()){
        event.preventDefault();  
    }
});

