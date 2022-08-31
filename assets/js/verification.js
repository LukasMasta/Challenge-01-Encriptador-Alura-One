export default function verification (text){
    if(validateEmptyText(text)){
        if(validateRegText(text)){
            return true;
        }
    } 
}

function validateEmptyText(text){
    if(text==""){
        alert("Debes ingresar algo para encriptar o desencriptar!");
        return false;
    }
    else{
        return true;
    }
}

function validateRegText(text){
    let myRegExp= /^[a-z ,\n]*$/
    if( myRegExp.test(text)){
    return true;
    }
    else{
        alert("Solo se permiten letras minusculas, No se acepta letras con acentos ni caracteres especiales!");
        return false;
    }
}