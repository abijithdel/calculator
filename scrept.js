if (document.getElementById("maib-desplay")==abijith){
    alert("YOUR CRECI")    
      
}

function onetime(val){
    document.getElementById("maib-desplay").value+=val
}
function none(){
    document.getElementById("maib-desplay").value=""
}
function tottel(){
   var tottelnum=document.getElementById("maib-desplay").value
    var display=eval(tottelnum)
    document.getElementById("maib-desplay").value=display
}
