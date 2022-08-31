import verification from'../js/verification.js'

const encryptButton=document.querySelector("#encrypt_button");
const textIn=document.querySelector("#text_in");
const textOut=document.querySelector("#text_out");
const img=document.querySelector(".img_textarea_two");

encryptButton.addEventListener("click", function(){
	encrypt();
});

function encrypt(){
    const text=textIn.value;
    let valid=verification(text);
        if(valid){
             let textencryp=text.replaceAll("e","enter") 
                                  .replaceAll("i","imes") 
                                  .replaceAll("a","ai") 
                                  .replaceAll("o","ober") 
                                  .replaceAll("u","ufat");
            img.style.display= "none";
            textOut.value=textencryp;
            textIn.value="";
        }    
}
