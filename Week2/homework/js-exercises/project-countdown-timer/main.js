
{
    'use strict';

    let lmntRef=document.getElementById('id_page_header');
    lmntRef.style.backgroundColor='gold';
    document.getElementById('id_page_title').innerHTML=lmntRef.innerHTML=
        `(Homework: Javascript 2 - week 2) - (PROJECT: Countdown Timer)`;
    lmntRef.style.borderRadius='12px';
    document.body.style.backgroundColor='#25003e';

    const timerStatusRef=document.getElementById('id_timer_status');
    const timerDisplayRef=document.getElementById('id_timer_element');
    const timerMinGrpRef=document.getElementById('id_min_container');
    const timerSecGrpRef=document.getElementById('id_sec_container');
    const timerMinIncRef=document.getElementById('id_min_increase');
    const timerMinDecRef=document.getElementById('id_min_decrease');
    const timerSecIncRef=document.getElementById('id_sec_increase');
    const timerSecDecRef=document.getElementById('id_sec_decrease');
    const timerToggleRef=document.getElementById('id_timer_toggle');
    const maxTimerTime=3599;
    let timerIsActive=true;
    let timerCurrentValue;
    let countdownTimer;
    document.body.onloadend=initializePage();

    function initializePage() {
        setTimeValue(0);
        timerStatusRef.innerHTML='Set countdown time';
        timerToggleRef.addEventListener("click",()=>
            {timerIsActive=!timerIsActive; setTimeValue(timerCurrentValue)});
        timerMinIncRef.addEventListener("click",()=>setTimeValue(timerCurrentValue+60));
        timerMinDecRef.addEventListener("click",()=>setTimeValue(timerCurrentValue-60));
        timerSecIncRef.addEventListener("click",()=>setTimeValue(timerCurrentValue+1));
        timerSecDecRef.addEventListener("click",()=>setTimeValue(timerCurrentValue-1));
    };

    function setTimeValue(newValue) {
        timerCurrentValue=(newValue<1?0:newValue>maxTimerTime?maxTimerTime:newValue);
        timerIsActive=timerIsActive&&(timerCurrentValue>0);
        timerStatusRef.innerHTML=(timerCurrentValue==0?'Timer has expired'
            :timerIsActive?'Countdown in progress':'Countdown is Paused');
        timerDisplayRef.innerHTML=('0'+String(Math.floor(timerCurrentValue/60))).substr(-2)
                             +':'+('0'+String(timerCurrentValue%60)).substr(-2);
        timerToggleRef.innerHTML=(timerIsActive?'Pause countdown':'Resume countdown');
        timerToggleRef.style.display=(timerCurrentValue==0?'none':'block');
        timerMinGrpRef.style.visibility=(timerIsActive?'hidden':'visible');
        timerSecGrpRef.style.visibility=(timerIsActive?'hidden':'visible');
        if ((countdownTimer)&&(!timerIsActive))
            {clearInterval(countdownTimer);countdownTimer=undefined};
        if ((timerIsActive)&&(!countdownTimer))
            {countdownTimer=setInterval(()=>{setTimeValue(timerCurrentValue-1)},1000)};
    };
};

;

