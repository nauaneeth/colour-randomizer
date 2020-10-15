function changec()
{
    var c=document.getElementById("col");
    var o=document.getElementsByClassName("wone");

    var letter="123456789abcdef";
    var d="#";

    for(i=0;i<6;i++)
    {
        d+=(letter[Math.floor(Math.random()*15)]).toString();
    }

    c.innerHTML=d;
    document.body.style.backgroundColor=d;
    var r=parseInt((d[1]+d[2]),16);
    var g=parseInt((d[3]+d[4]),16);
    var b=parseInt((d[5]+d[6]),16);
    var hsp = (0.299 * r +0.587 * g +0.114 * b);

    if(hsp>127.5)
    {
        o[0].style.color="rgba(0, 0, 0, 0.721)";
        o[1].style.color="rgba(0, 0, 0, 0.721)";
    }
    else
    {
        o[0].style.color="rgba(255, 255, 255, 0.849)";
        o[1].style.color="rgba(255, 255, 255, 0.849)";
    }

}