
{
    'use strict';

    let lmntRef=document.getElementById('id_page_header');
    lmntRef.style.backgroundColor='gold';
    document.getElementById('id_page_title').innerHTML=
        lmntRef.innerHTML=`(Homework: Javascript 2 - week 1) - (Exercise 04: What's the time?)`;
    lmntRef.style.borderRadius='12px';
    document.body.style.backgroundColor='#25003e';

    let clockRef=document.createElement('H2');
    clockRef.id='id_clock_text';
    clockRef.className='cls_text_align_center';
    clockRef.style.padding='1em';
    //  `${number}%` produces an oval - `${decimanNumber}em` produces rounded-corner rectangle
    clockRef.style.borderRadius='50%';
    clockRef.style.backgroundColor='orange';
    clockRef.style.position='absolute';
    clockRef.style.top='2em';
    clockRef.style.right='2em';
    clockRef.innerHTML='00 : 00 : 00';
    document.body.appendChild(clockRef);

    function timer_callback(){
        let time_stamp=new Date();
        let tsHH=('0'+time_stamp.getHours()).substr(-2,2);
        let tsMM=('0'+time_stamp.getMinutes()).substr(-2,2);
        let tsSS=('0'+time_stamp.getSeconds()).substr(-2,2);
        clockRef.innerHTML=`${tsHH} : ${tsMM} : ${tsSS}`;
        setTimeout(timer_callback,333);
    }

    document.addEventListener('load',timer_callback());
};

;

