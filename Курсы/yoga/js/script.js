window.addEventListener('DOMContentLoaded',function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabcontent(a){
        for (let i= a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }
    
    hideTabcontent(1);

    function showTabcontent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');          
        }
    }

    info.addEventListener('click', function(){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for ( let i = 0; i < tab.length; i ++){
                if (target == tab[i]){
                    hideTabcontent(0);
                    showTabcontent(i);
                }
            }
        }
    });
    
    //Timer

    let deadline = '2018-03-30';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime)-Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60)));
            if (hours<10){
                hours = '0'+hours;
            }
            if (minutes<10){
                minutes = '0'+minutes;
            }
            if (seconds<10){
                seconds = '0'+seconds;
            }
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(upDateClock, 1000);

        function upDateClock(){

            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if( t.total <=0){
                clearInterval(timeInterval);
            }
        }

    }
    if(getTimeRemaining(deadline).total>=0){
        setClock('timer', deadline);
    }
    
    
    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    })
    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })
});