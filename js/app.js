function CountDow(){
    let today = new Date();
    let hou = 3;
    let min = 60;
    let sec = 60;
    setInterval(function (){
        document.getElementById("timeOut").innerHTML=hou + ":" + min + ":" + sec;
        sec--;
        if (sec==0){
            sec=60;
            min--;
        }
        if (min==0){
            min=60;
            hou--;
        }
        if (hou==0){
            hou=3;
        }
    },1000)
}
CountDow();