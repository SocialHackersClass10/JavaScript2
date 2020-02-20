
{
    'use strict';

    let lmntRef=document.getElementById('id_page_header');
    lmntRef.style.backgroundColor='gold';
    document.getElementById('id_page_title').innerHTML=
        lmntRef.innerHTML='(Homework: Javascript 2 - week 1) - (Exercise 02: About me)';
    document.body.style.backgroundColor='#25003e';
    const imgTagUniqueID='apicture';
    let lastRandomIndex=-1;

    function randomData(){
        const funnyData=[
            {   nickname : 'Professional Sleeper Pilot',
                fav_food : 'Potato Flambe',
                hometown : 'Cockaigne',
                apicture : 'http://2.bp.blogspot.com/_A3GOyr0yK3Y/TNBaWhox5CI/AAAAAAAA71w/uFDigoTW004/s1600/earsbig.jpg',
            },
            {   nickname : 'Shadow Accounting Dancer',
                fav_food : 'Fish ratatouille',
                hometown : 'Shangri-La',
                apicture : 'http://3.bp.blogspot.com/-NJEdS0XD93o/TV6BdBhquJI/AAAAAAAAfFw/il2wlrrd-vY/s400/Weird_Faces_A_Guy_Can_Make_12.jpg',
            },
            {   nickname : 'Electrician-Gynecologist',
                fav_food : 'Green fried tomatoes',
                hometown : 'El Dorado',
                apicture : 'https://i.ytimg.com/vi/2FgJOB0DGg4/hqdefault.jpg',
            },
            {   nickname : 'Occupational Hazard Engineer',
                fav_food : 'Leftover morning pizza',
                hometown : 'Atlantis',
                apicture : 'https://cdn.quotesgram.com/img/61/15/1620699906-a_aaa-funny-face-.jpg',
            }
        ];
        let rngIdx=-1;
        do {rngIdx=Math.floor(Math.random()*funnyData.length)} while (rngIdx==lastRandomIndex);
        lastRandomIndex=rngIdx;
        const valueList=Object.values(funnyData[rngIdx]);
        const keyList=Object.keys(funnyData[0]);
        for (let i=0; i<keyList.length; i++) {
            const lmnt=document.getElementById(keyList[i]);
            if (keyList[i]===imgTagUniqueID) {lmnt.setAttribute('src',valueList[i])}
            else {lmnt.innerHTML=valueList[i]}
        };
    };

    lmntRef=document.getElementById('id_exercise_container');
    lmntRef.style.backgroundColor='orange';
    lmntRef.style.fontFamily='Arial, sans-serif';
    let imgRef=document.createElement('IMG');
    lmntRef.appendChild(imgRef);
    imgRef.id=imgTagUniqueID;
    imgRef.alt='[ My picture ]';
    imgRef.title='My picture';

    lmntRef=document.createElement('DIV');
    document.body.appendChild(lmntRef);
    lmntRef.style.backgroundColor='gold';
    lmntRef.style.position='absolute';
    lmntRef.style.bottom='0';
    lmntRef.style.right='0';
    lmntRef.className='cls_text_align_right';

    imgRef=document.createElement('SPAN');
    imgRef.innerHTML='Would you like to know more? . . . . ';
    lmntRef.appendChild(imgRef);
    imgRef=document.createElement('BUTTON');
    imgRef.innerHTML='Know More';
    lmntRef.addEventListener("click",randomData);
    lmntRef.appendChild(imgRef);

    lmntRef=document.getElementsByTagName('li');
    for (let i=0; i<lmntRef.length; i++) {
        lmntRef[i].innerHTML=lmntRef[i].innerHTML.replace('Nickname:','Vocation:');
        lmntRef[i].className='cls_list_item';
    };

    randomData();
};

;

