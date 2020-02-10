
{
    'use strict';

    document.getElementById("id_page_title").innerHTML=
        document.getElementById("id_page_header").innerHTML=
            '(Homework: Javascript 2 - week 1) - (Exercise 01: The book list)';
    document.body.style.backgroundColor='#25003e';

    myBookList=[
        {   book_title  : 'Nineteen Eighty-Four',
            book_link   : 'http://en.wikipedia.org/wiki/Nineteen_Eighty-Four',
            book_author : 'George Orwell',
            author_link : 'http://en.wikipedia.org/wiki/George_Orwell',
            cover_image : 'http://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg',
            read_pending: false
        },
        {   book_title  : 'Das Parfum',
            book_link   : 'http://en.wikipedia.org/wiki/Perfume_(novel)',
            book_author : 'Patrick Süskind',
            author_link : 'http://en.wikipedia.org/wiki/Patrick_Süskind',
            cover_image : 'http://upload.wikimedia.org/wikipedia/en/f/f5/PerfumeSuskind.jpg',
            read_pending: true
        },
        {   book_title  : 'The Name of the Rose',
            book_link   : 'http://en.wikipedia.org/wiki/The_Name_of_the_Rose',
            book_author : 'Umberto Eco',
            author_link : 'http://en.wikipedia.org/wiki/Umberto_Eco',
            cover_image : 'http://upload.wikimedia.org/wikipedia/en/e/eb/The_Name_of_the_Rose.jpg',
            read_pending: false
        }
    ];

    function addChild(prntRef,chldTag,chldClss,chldText){
        let newLMNT=document.createElement(chldTag);
        if (chldClss) {newLMNT.className=chldClss}
        if (chldText) {newLMNT.innerHTML=chldText}
        prntRef.appendChild(newLMNT);
        return newLMNT
    };

    let divRef=addChild(document.body,'DIV','','');
    divRef.style.backgroundColor='orange';
    let tableRef=addChild(divRef,'TABLE','','');
    tableRef.width='100%';
    let rowRef=addChild(tableRef,'TR','','');
    addChild(rowRef,'TH','cls_text_align_left','Book Title');
    addChild(rowRef,'TH','cls_text_align_center','Author');
    addChild(rowRef,'TH','cls_text_align_center','Book Cover');
    addChild(rowRef,'TH','cls_text_align_center','Read Pending?');

    let lmntRef;
    myBookList.forEach((bookRef)=>{
        rowRef=addChild(tableRef,'TR','','');
        lmntRef=addChild(rowRef,'TD','',);
            lmntRef=addChild(lmntRef,'A','',bookRef.book_title);
            lmntRef.title='Click for transition to related wiki page.';
            lmntRef.target='_blank';
            lmntRef.href=bookRef.book_link;
        lmntRef=addChild(rowRef,'TD','cls_text_align_center','');
            lmntRef=addChild(lmntRef,'A','',bookRef.book_author);
            lmntRef.title='Click for transition to related wiki page.';
            lmntRef.target='_blank';
            lmntRef.href=bookRef.author_link;
        lmntRef=addChild(rowRef,'TD','cls_text_align_center','');
            lmntRef=addChild(lmntRef,'IMG','','');
            lmntRef.setAttribute('alt','Book cover: '+bookRef.book_title);
            lmntRef.setAttribute('title','Book cover: '+bookRef.book_title);
            lmntRef.setAttribute('width','128');
            lmntRef.setAttribute('src',bookRef.cover_image);
        lmntRef=addChild(rowRef,'TD','cls_text_align_center','');
        lmntRef.style.padding='1em';
            lmntRef=addChild(lmntRef,'SPAN',''
                                ,`I have ${bookRef.read_pending?"not":"already"
                                  } read this book${bookRef.read_pending?" yet.":"."}`);
            lmntRef.style.backgroundColor=(bookRef.read_pending?'pink':'lime');
            lmntRef.style.padding='1em';
            lmntRef.style.borderRadius='45%';
    });

};

;

