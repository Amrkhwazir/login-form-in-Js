var userEmail = "amrkh5678@gmail"
var userPassword = 12345
function  validation(){
    var userInputEmail = prompt("enter your email")
    var userInputPassword = +prompt("enter your Password")
    if (userInputEmail === userEmail && userInputPassword === userPassword){
        alert("Welcome to website")
        return true
    } else if( userInputEmail !== userEmail){
        alert("Sorry your email is incorrect")
        return true
    } else if( userInputPassword !== userPassword){
        alert("Sorry your Passeord is incorrect")
        return true
    }else if(userInputEmail !== userEmail && userInputPassword !== userPassword){
        alert("both Email and Password is incorrect")
        return true
    }
}