
{
    'use strict';

    let lmntRef=document.getElementById('id_page_header');
    lmntRef.style.backgroundColor='gold';
    document.getElementById('id_page_title').innerHTML=lmntRef.innerHTML=
        `(Homework: Javascript 2 - week 3) - (PROJECT: The Tip Calculator)`;
    lmntRef.style.borderRadius='12px';
    document.body.style.backgroundColor='#25003e';

    const symbolCurrencyEuro='€';
    const symbolApostrophe='’';

    const billTotalEditRef=document.getElementById("id_bill_total_edit");
    const qualityRadioRef=document.getElementsByClassName('cls_service_quality_radio');
    const billPeopleSubRef=document.getElementById("id_people_total_sub");
    const billPeopleAddRef=document.getElementById("id_people_total_add");
    const arrowLeft =37;
    const arrowUp   =38;
    const arrowRight=39;
    const arrowDown =40;

    const setBillData=createBillData();
    initializePageData(0,2,1);

    function initializePageData(pAmount,pRating,pSharing) {
        qualityRadioRef[pRating].checked=true;
        billTotalEditRef.value=pAmount;
        setBillData(pAmount,pRating,pSharing);
        for (let i=0; i<5; i++) {
            switch (i) {
                case 0 :    qualityRadioRef[i].onkeydown=function(event){
                                if ([arrowDown,arrowUp,arrowLeft].indexOf(event.keyCode)>=0)
                                {event.preventDefault()}};
                            break;
                case 4 :    qualityRadioRef[i].onkeydown=function(event){
                                if ([arrowDown,arrowUp,arrowRight].indexOf(event.keyCode)>=0)
                                {event.preventDefault()}};
                            break;
                default:    qualityRadioRef[i].onkeydown=function(event){
                                if ([arrowDown,arrowUp].indexOf(event.keyCode)>=0)
                                {event.preventDefault()}};
            }
            qualityRadioRef[i].onchange=function() {setBillData(undefined,Number(this.value))};
        }
        billTotalEditRef.oninput=function() {setBillData(this.value)};
        billPeopleSubRef.onclick=function(event) {setBillData(undefined,undefined,-1)};
        billPeopleAddRef.onclick=function(event) {setBillData(undefined,undefined,1)};
    }

    function createBillData() {
        const qualityRatingTextRef=document.getElementById('id_service_quality_text');
        const qualityPercentTipRef=document.getElementById("id_service_quality_tip");
        const billPeopleTextRef=document.getElementById("id_people_total_text");
        const calcTipHeaderRef=document.getElementById("id_calc_tip_header");
        const calcTipAmountRef=document.getElementById("id_calc_tip_amount");
        const calcTipEachRef=document.getElementById("id_calc_tip_each");
        calcTipAmountRef.style.paddingTop='4px';
        const qualityList = [
                {  ratingPercent:  5,  ratingText:'Poor'       },
                {  ratingPercent: 10,  ratingText:'Fair'       },
                {  ratingPercent: 15,  ratingText:'Good'       },
                {  ratingPercent: 20,  ratingText:'Very good'  },
                {  ratingPercent: 30,  ratingText:'Excellent'  }   ];
        const maxValue=9999.99;
        let propAmount = -1;
        let propRating = -1;
        let propSharing= 0;
        return (pAmount,pRating,pSharing)=>{
            if ([setAmount(pAmount),setRating(pRating),setSharing(pSharing)].indexOf(true)>-1) {
                if ((isNaN(propAmount))||(propAmount<=0)||(propAmount>maxValue)) {
                    calcTipHeaderRef.innerHTML='Enter a positive bill amount';
                    calcTipAmountRef.innerHTML='Accepted values range';
                    calcTipEachRef.innerHTML  ='between 0.01 and '+maxValue;
                    calcTipAmountRef.style.fontSize='';
                } else {
                    calcTipHeaderRef.innerHTML='Tip amount';
                    calcTipAmountRef.innerHTML=symbolCurrencyEuro+' '+getFormatedTipAmount();
                    calcTipEachRef.innerHTML  =propSharing>1?'each':' ';
                    calcTipAmountRef.style.fontSize='1.5em';
                };
                qualityRatingTextRef.innerHTML=getSecureRatingText();
                qualityPercentTipRef.innerHTML=
                                            `( calculating a ${getSecureRatingPercent()}% tip )`;
                billPeopleTextRef.innerHTML=propSharing>1?propSharing+' people':'one person';
            };
        };
        function getFormatedTipAmount(){
            return (Math.round(propAmount*getSecureRatingPercent()/getSecureSharing())/100)
                .toLocaleString(undefined,{minimumIntegerDigits:1,minimumFractionDigits:2});
        }
        function setAmount(param) {
            let newAmount=param==undefined?propAmount:Number(param);
            if (propAmount!=newAmount) {
                propAmount=newAmount;
                return true;
            };
        };
        function setRating(param) {
            let newRating=param==undefined?propRating:param;
            if (propRating!=newRating) {
                propRating=newRating;
                return true;
            };
        };
        function setSharing(param) {
            let newSharing=param==undefined?propSharing:(propSharing+param)<1?
                    propSharing:(propSharing+param)>99?propSharing:propSharing+param;
            if (propSharing!=newSharing) {
                propSharing=newSharing;
                return true;
            };
        };
        function getSecureRatingText()
            {return propRating<0?'-':propRating>4?'-':qualityList[propRating].ratingText};
        function getSecureRatingPercent()
            {return propRating<0?1:propRating>4?1:qualityList[propRating].ratingPercent};
        function getSecureSharing(){return propSharing<1?1:propSharing};
    }
};

;

