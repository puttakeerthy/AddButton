let count=0;

function increment(){
count++;
document.getElementById("text").innerHTML=count;
}
function decrement(){
    if(count>0)
    {
        count--;
        document.getElementById("text").innerHTML=count;
    }
}