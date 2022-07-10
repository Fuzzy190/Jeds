function func1(){
    var eCode = document.getElementById('sCode').value;

    //Message
    if(eCode =="MEN"){ 
        window.location.href = "/message/yeng.html";
    }
    else if(eCode =="SHEI"){
        window.location.href = "/message/shei.html";
    }
    else if(eCode =="DOD"){
        window.location.href = "/message/yana.html";
    }
    else if(eCode =="BRO"){
        window.location.href = "/message/bro.html";
    }
    else if(eCode =="2RES"){
        window.location.href = "/message/2res.html";
    }
    //Easter Eggs
    else if(eCode == "JARED"){
        alert("Hoy ikaw ahh!!! Crush mo ba ako?");
        alert("Chat moko okay!");
        alert("Bye! chat you there! ");
        window.location.href = "https://www.messenger.com/t/100000528078730/";
    }
    //Problems
    else if(eCode == ""){
        alert("You did not enter anything");
    }
    else{
        alert("Ohh, sorry "+eCode+" if I didn't put you in my special code please forgive me I love you!... or you can hit me up so I could put you in my special code ;)");
    }
}
function func2(){
    alert("Enter the nickname that I gave too you or what I usually call you when I chat with you for example: you call me Jed etc...");
}
