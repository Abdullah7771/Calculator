function getNumber(num){
    var result=document.getElementById("result");
    result.value += num ;
}




function clearResult(){
    var result=document.getElementById("result");
    result.value =" " ;
}



function opr(){
    var result=document.getElementById("result");
    result.value =eval(result.value);
    
}




function getSquare(){
    var result=document.getElementById("result");
    result.value =result.value*result.value ;
}


