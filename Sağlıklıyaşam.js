function hesapla() {
    var kilo = document.KitleForm.kilo.value
    var boy = document.KitleForm.boy.value
    if(kilo > 0 && boy > 0){  
    var sonuc = kilo/(boy/100*boy/100)
    document.KitleForm.endeks.value = sonuc
    if(sonuc < 18.5){
    document.KitleForm.islemsonucu.value = "Zayıfsınız."
    }
    if(sonuc > 18.5 && sonuc < 25){
    document.KitleForm.islemsonucu.value = "Gayet Sağlıklı."
    }
    if(sonuc > 25){
    document.KitleForm.islemsonucu.value = "Vücut kitle indeksiniz olması gerekenden fazla."
    }
    }
    else{
    alert("Lütfen bir değer giriniz:")
    }
 }

 
   /* function kontrol()
    {
        if (diyet.boy.value == "" )
        {
            alert("Boyunuzu giriniz.");
            diyet.boy.focus();
            return(false);
        }
     
     
        if (diyet.kilo.value == "" )
        {
            alert("Kilonuzu giriniz.");
            diyet.kilo.focus();
            return(false);
        }
     
        if (diyet.yas.value == "" )
        {
            alert("Yaşınızı giriniz.");
            diyet.yas.focus();
            return(false);
        }
    check()
    }
         
         
    function check()
    {
    var c1=0 ; var d1=0
    var c2=0 ; var d2=0
    var c3=0 ; var d3=0
     
    if (document.diyet.boy.value >= 140)  {var c1=1}
    if (document.diyet.boy.value <= 200)  {var d1=1}
    if (document.diyet.kilo.value >= 37)  {var c2=2}
    if (document.diyet.kilo.value <= 140)  {var d2=2}
    if (document.diyet.yas.value >= 16)  {var c3=4}
    if (document.diyet.yas.value <= 60)  {var d3=4}
     
    var c=c1+c2+c3
    var d=d1+d2+d3
     
    alarm=new Array()
    alarm[0]="Boy, kilo ve yaş "
    alarm[1]="kilo ve yaş "
    alarm[2]="boy ve yaş "
    alarm[3]="yaş "
    alarm[4]="boy ve kilo "
    alarm[5]="kilo "
    alarm[6]="boy "
     
    if (c==7) 
            {if (d==7){i_kilo()}
            else {alert(alarm[d] + "uygun değil !")}
            }
        else {alert(alarm[c] + "uygun değil !")}
        }
     
    function i_kilo()
    {
        var temp1 = Math.round(document.diyet.yas.value/49);
        var temp2 = Math.round(document.diyet.yas.value/71);
        var temp3 = Math.round(document.diyet.yas.value/91);
        var tem = document.diyet.cinsiyet.value
        var neki = 0
         
        if (tem == 0) 
        {
        if (temp1 != 0)  {neki = 21}
        if (temp1 == 0)  {neki = 20}
        }
     
        if (tem != 0) 
        {
         if (temp1 != 0)  
            {
            if (temp2 != 0) 
                {
                if (temp3 != 0)  {neki = 24}
                if (temp3 == 0)  {neki = 23}
                }
            if (temp2 == 0)  {neki = 22}
            }
        if (temp1 == 0)  {neki = 21}
        }
             
    document.diyet.ideal.value = Math.round(neki * Math.pow(document.diyet.boy.value,2)/10000)
     
    document.diyet.fark.value = document.diyet.kilo.value - document.diyet.ideal.value
     
    if (document.diyet.fark.value > 0 )
        {alert(document.diyet.fark.value + " kilo vermelisiniz.")}
    if (document.diyet.fark.value < 0 )
        {alert(document.diyet.fark.value*(-1) + " kilo almalısınız.")}
    if (document.diyet.fark.value == 0 )
        {alert("Bravo. İdeal kilonuzdasınız.")}
     
    }*/