
{
    'use strict';

    let lmntRef=document.getElementById('id_page_header');
    lmntRef.style.backgroundColor='gold';
    document.getElementById('id_page_title').innerHTML=lmntRef.innerHTML
        =`(Homework: Javascript 2 - week 2) - (Exercise 05: All your favorite hobbies)`;
    lmntRef.style.borderRadius='12px';
    document.body.style.backgroundColor='#25003e';

    lmntRef=document.createElement('DIV');
    lmntRef.innerHTML='<strong>Bonus content:</strong> the javascript file contains'
                     +' a <strong>randomPhraseComposer</strong> routine !';
    lmntRef.style.backgroundColor='pink';
    lmntRef.style.borderRadius='12px';
    lmntRef.style.textAlign='center';
    lmntRef.style.fontSize='85%';
    document.body.appendChild(lmntRef);

    lmntRef=document.createElement('DIV');
    lmntRef.style.backgroundColor='orange';
    lmntRef.style.borderRadius='.8em';
    document.body.appendChild(lmntRef);

    let msgRef=document.createElement('H4');
    msgRef.innerHTML='Welcome my friend. Here is an extensive list of your hobbies:';
    msgRef.style.margin='10px 0px 0px';
    msgRef.style.padding='0px 0px';
    lmntRef.appendChild(msgRef);

    msgRef=document.createElement('SPAN');
    msgRef.style.backgroundColor='gold';
    msgRef.style.position='absolute';
    msgRef.style.bottom='1em';
    msgRef.style.right='1em';
    msgRef.style.padding='8px 14px';
    msgRef.style.margin='0px';
    msgRef.style.borderRadius='.8em';
    msgRef.style.fontSize='80%';
    document.body.appendChild(msgRef);

    let listRef=document.createElement('UL');
    listRef.style.margin='10px 0px 10px 50px';
    listRef.style.padding='0px 0px';
    lmntRef.appendChild(listRef);

    function randomPhraseComposer(listOfLists,maxPhraseCount) {
        function spliceRandomArrayElement(anArray)
            {return anArray.splice(Math.floor(Math.random()*anArray.length),1)};
        let clonedList=[]; let resCount=maxPhraseCount?maxPhraseCount:undefined;
        for (let i=0; i<listOfLists.length; i++) {
            clonedList.push(listOfLists[i].slice());
            if ((!resCount)||(resCount>clonedList[i].length))
                {resCount=clonedList[i].length};
        };
        let fResult=[];
        for (let i=0; i<resCount; i++) {
            let newphrase='';
            for (let ii=0; ii<clonedList.length; ii++)
                {newphrase+=`${spliceRandomArrayElement(clonedList[ii])} `};
            fResult.push(newphrase.trim());
        }
        return fResult;
    };

    let nextRefresh=-1;
    const listPrefix=[   'Avid','Keen','Eager','Ardent','Passionate','Zealous'
                        ,'Hard-core','Devoted','Dedicated','Greedy','Hungry'
                        ,'Impatient','Anxious','Possessive','Lazy','Slack'
                        ,'Sluggish','Lethargic','Slow','Tired','Fast','Aggressive'];
    const listMiddle=[   'deflated volleyball','car tire cap','sub-sub-marine'
                        ,'left outer joint','right leather glove','websurfboard'
                        ,'used toothbrush','toothpaste tube','discarded ballpen'
                        ,'pencil sharpener','pink mushroom','dried grass'
                        ,'left yellow sneaker','fist-sized dice'
                        ,'miniature furniture','airplane barf bag','rusty nail'
                        ,'swiss army knife','inflatable autopilot'
                        ,'plastic water bottle','fake autograph'
                        ,'banana sticker','soda can can'
                        ,'back scratcher','ancient coin','bottle cap','rubber duck'];
    const listSuffix=[   'smoker','drinker','player','fighter','pilot'
                        ,'hunter','kicker','collector','gatherer','accumulator'
                        ,'aggregator','trapper','stalker','predator','reconciler'
                        ,'combatant','mercenary','boxer','wrestler','imbiber','actor'];

    function refreshText()
        {msgRef.innerHTML=`List will auto-refresh in ${nextRefresh} sec.`};

    function showHobbies() {
        while (listRef.childNodes.length>0) {listRef.removeChild(listRef.childNodes[0])}
        randomPhraseComposer([listPrefix,listMiddle,listSuffix],12).forEach(lmnt=>{
            let chldRef=document.createElement('LI');
            chldRef.innerHTML=lmnt;
            chldRef.style.padding='3px 0px 3px 12px';
            listRef.appendChild(chldRef);
        });
        nextRefresh=60;
        refreshText();
    };

    showHobbies();
    setInterval(()=>{nextRefresh-=1;if(nextRefresh>0){refreshText()}else{showHobbies()}},1000);
};

;

