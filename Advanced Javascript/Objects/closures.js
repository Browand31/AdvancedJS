function callMeMaybe (){
    const callMe = "I am now here!";
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();