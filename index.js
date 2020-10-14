function changec()
{
    var c=document.getElementById("col");
    var letter="123456789abcdef";
    var d="#";
    for(i=0;i<6;i++)
    {
        d+=(letter[Math.floor(Math.random()*15)]).toString();
    }
    c.innerHTML=d;
    document.body.style.backgroundColor=d;
}