
{
    'use strict';

    let lmntRef=document.getElementById('id_page_header');
    lmntRef.style.backgroundColor='gold';
    document.getElementById('id_page_title').innerHTML=
        lmntRef.innerHTML=`(Homework: Javascript 2 - week 1) - (PROJECT: Random Quote Generator)`;
    lmntRef.style.borderRadius='12px';
    document.body.style.backgroundColor='#25003e';

    lmntRef=document.createElement('DIV');
    lmntRef.style.backgroundColor='orange';
    lmntRef.style.position='absolute';
    lmntRef.style.top='6em';
    lmntRef.style.right='.8em';
    lmntRef.className='cls_text_align_left';
    lmntRef.style.borderRadius='40px 24px 50px 4px';
    lmntRef.style.maxWidth='65%';
    document.body.appendChild(lmntRef);
    let qTextRef=document.createElement('H2');
    qTextRef.innerHTML='Some Funny or Witty Quote';
    qTextRef.style.textAlign='center';
    lmntRef.appendChild(qTextRef);
    let qPersonRef=document.createElement('P');
    qPersonRef.innerHTML='by a Weird Person';
    qPersonRef.style.textAlign='right';
    lmntRef.appendChild(qPersonRef);
    let btnRef=document.createElement('DIV');
    btnRef.style.backgroundColor='gold';
    btnRef.style.margin='0px 20px 8px 0px';
    btnRef.style.padding='0.5em .8em';
    btnRef.style.fontSize='.9em';
    btnRef.style.display='inline-block';
    btnRef.style.borderRadius='1.2em';
    btnRef.innerHTML='Next Random Quote';
    btnRef.addEventListener("click",randomQuote);
    lmntRef.appendChild(btnRef);
    let qRefreshRef=document.createElement('SPAN');
    qRefreshRef.style.backgroundColor='gold';
    qRefreshRef.style.margin='0px 0px 8px 20px';
    qRefreshRef.style.padding='0.3em .5em';
    qRefreshRef.style.fontSize='.7em';
    qRefreshRef.style.borderRadius='1.2em';
    qRefreshRef.innerHTML='auto refresh';
    lmntRef.appendChild(qRefreshRef);

    let lastRandomIndex=-1;
    let nextRefresh=-1;

    function updateRefreshText() {qRefreshRef.innerHTML=`Next auto-refresh in ${nextRefresh} sec.`};

    function randomQuote(){
        let quoteList=[
            {qName:'Alan Dundes', qText:'Light travels faster than sound. This is why some people appear bright until you hear them speak.'},
            {qName:'Albert Camus', qText:'Nobody realizes that some people expend tremendous energy merely to be normal.'},
            {qName:'Albert Einstein', qText:'The difference between stupidity and genius is that genius has its limits.'},
            {qName:'Alexander Woollcott', qText:'All the things I really like to do are either immoral, illegal or fattening.'},
            {qName:'Ambrose Bierce', qText:'War is God’s way of teaching Americans geography.'},
            {qName:'Andy Borowitz', qText:'It would be nice to spend billions on schools and roads, but right now that money is desperately needed for political ads.'},
            {qName:'Andy Rooney', qText:'The average dog is a nicer person than the average person.'},
            {qName:'Ann Landers', qText:'If you want your children to listen, try talking softly to someone else.'},
            {qName:'Arthur C. Clarke', qText:'I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.'},
            {qName:'Ashleigh Brilliant', qText:'My opinions may have changed, but not the fact that I’m right.'},
            {qName:'Benjamin Franklin', qText:'Wine is constant proof that God loves us and loves to see us happy.'},
            {qName:'Benny Hill', qText:'Have you noticed that all the people in favor of birth control are already born?'},
            {qName:'Bernard Baruch', qText:'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.'},
            {qName:'Bertrand Russell', qText:'Most people would sooner die than think; in fact, they do so.'},
            {qName:'Bertrand Russell', qText:'The world is full of magical things patiently waiting for our wits to grow sharper.'},
            {qName:'Betty White', qText:'Facebook just sounds like a drag, in my day seeing pictures of peoples vacations was considered a punishment.'},
            {qName:'Bill Maher', qText:'Everything that used to be a sin is now a disease.'},
            {qName:'Bill Watterson', qText:'The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.'},
            {qName:'Billy Connolly', qText:'Before you judge a man, walk a mile in his shoes. After that who cares? ... He’s a mile away and you’ve got his shoes!'},
            {qName:'Billy Sunday', qText:'Going to church doesn’t make you a Christian any more than going to a garage makes you an automobile.'},
            {qName:'Billy Wilder', qText:'If you’re going to tell people the truth, be funny or they’ll kill you.'},
            {qName:'Bob Hope', qText:'A bank is a place that will lend you money if you can prove that you don’t need it.'},
            {qName:'Bob Thaves', qText:'Inside me there’s a thin person struggling to get out, but I can usually sedate him with four or five cupcakes.'},
            {qName:'Bryan White', qText:'We never really grow up, we only learn how to act in public.'},
            {qName:'Buddy Hackett', qText:'As a child my family’s menu consisted of two choices: take it or leave it.'},
            {qName:'Caroline Rhea', qText:'My favorite machine at the gym is the vending machine.'},
            {qName:'Casey Stengel', qText:'All right everyone, line up alphabetically according to your height.'},
            {qName:'DOT.NOT', qText:'Don’t cry because it happened. Rather smile ’cause it’s over.'},
            {qName:'Charles de Gaulle', qText:'He who laughs last didn’t get the joke.'},
        ];
        let rngIdx=-1;
        do {rngIdx=Math.floor(Math.random()*quoteList.length)} while (rngIdx==lastRandomIndex);
        lastRandomIndex=rngIdx;
        qTextRef.innerHTML=quoteList[lastRandomIndex].qText;
        qPersonRef.innerHTML=quoteList[lastRandomIndex].qName;
        nextRefresh=15;
        updateRefreshText();
    }

    function quoteRefresh() {
        nextRefresh-=1;
        if (nextRefresh>0) {updateRefreshText()} else {randomQuote()};
    }

    randomQuote();
    setInterval(quoteRefresh,1000);

};

;

