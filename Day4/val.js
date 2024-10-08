function Validated(){
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value; 

    if(username.length<10) 
        return false;
    return true;
} 
