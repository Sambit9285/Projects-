setInterval(() => {

       date =new Date();
       hh =date.getHours();
       mm = date.getMinutes();
       ss =date.getSeconds();

       hRotation =30*hh + mm/2;
       mRotation = 6*mm;
       sRotation =6*ss;

      hr.style.transform = `rotate(${hRotation}deg)`;      
      min.style.transform = `rotate(${mRotation}deg)`;      
      sec.style.transform = `rotate(${sRotation}deg)`;      

},1000);