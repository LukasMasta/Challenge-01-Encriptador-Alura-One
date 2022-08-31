const copyButton=document.querySelector("#copy_button");
const textOut=document.querySelector("#text_out");

copyButton.addEventListener("click", function(){
    copy();
});

function copy(){
    navigator.clipboard.writeText(textOut.value)  
}