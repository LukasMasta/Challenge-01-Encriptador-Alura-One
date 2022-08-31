import verification from'../js/verification.js'

const decryptButton=document.querySelector("#decrypt_button");
const textIn=document.querySelector("#text_in");
const textOut=document.querySelector("#text_out");

decryptButton.addEventListener("click", function(){
    decrypt();
});

function decrypt(){

    let text=textIn.value;
    let valido=verification(text);
    if(valido){  
        let textdecrypt=text.replaceAll("enter","e") 
                                     .replaceAll("imes","i") 
                                     .replaceAll("ai","a") 
                                     .replaceAll("ober","o") 
                                     .replaceAll("ufat","u");                          
        textOut.value=textdecrypt;
        textIn.value="";
    }
}