
function hijackGoogleLogo(){
    'use strict';
    const hackImg='https://www.hackyourfuture.dk/static/logo-dark.svg';
    let trgt=document.getElementById('hplogo');
    trgt.setAttribute('src',hackImg);
    trgt.setAttribute('srcset',hackImg+` 1x, ${hackImg} 2x`);
};

;

