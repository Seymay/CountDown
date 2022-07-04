const gunler= document.getElementById("day");
const saatler= document.getElementById("hour")
const dakikalar= document.getElementById("minute")
const saniyeler= document.getElementById("second")

const yeniYıl=new Date("01/01/2023").getTime();

function countdown()
{
    const yeniYılTarih= new Date(yeniYıl) 
    const gecenZaman = new Date();
    const gecenSaniye= (yeniYılTarih-gecenZaman)/1000;

    const gun= Math.floor(gecenSaniye/3600/24);
    const saat=Math.floor(gecenSaniye/3600)%24;
    const dakika= Math.floor(gecenSaniye/60)%60
    const saniye=Math.floor(gecenSaniye) %60
    gunler.innerHTML= (gun);
    saatler.innerHTML=saat;
    dakikalar.innerHTML=dakika ;
    saniyeler.innerHTML=saniye;
    

}
countdown();
setInterval(countdown,1000)


