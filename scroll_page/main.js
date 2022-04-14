window.addEventListener('load', () => {
    let body = document.body;

    let height;
    let num = 0;
    let targetY = 0;
    let offsetY = 0;
    let moving = false;
    let timer = 0;

    let container = document.querySelector('.container');
    console.log(container);

    let gnb = document.querySelector('#GNB');
    let menuList = gnb.children[0].children;
    let pageList = [];

    for (let i = 0; i < container.children.length; i++) {
        if (container.children[i].tagName === 'SECTION') {
            pageList.push(container.children[i]);
        }
    }

    console.log(window.innerHeight);
    function init() {
        height = window.innerHeight;
        targetY = num * height;
        menuList[num].classList.add('active');

        for (let i = 0; i < pageList.length; i++) {
            pageList[i].style.height = height + 'px';
        }
    }
    init();

    window.addEventListener('resize', init);

    document.addEventListener('scroll', () => {
        offsetY = window.scrollY;
        if (offsetY < pageList[1].offsetTop) {
            n = 0;
        } else if (offsetY < pageList[2].offsetTop) {
            n = 1;
        } else if (offsetY < pageList[3].offsetTop) {
            n = 2;
        } else if (offsetY < pageList[4].offsetTop) {
            n = 3;
        } else if (offsetY < pageList[5].offsetTop) {
            n = 4;
        } else {
            n = 5;
        }

        for (let i = 0; i < menuList.length; i++) {
            if (i === n) {
                menuList[i].classList.add('active');
            } else {
                menuList[i].classList.remove('active');
            }
        }
    });

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].index = i;
        menuList[i].addEventListener('click', event => {
            event.preventDefault();
            if (moving) return;

            offsetY = window.scrollY;
            num = event.currentTarget.index;
            height = window.innerHeight;
            targetY = num * height;

            console.log(`num : ${num}, targetY : ${targetY}`);
            window.scrollTo({ top: targetY, behavior: 'smooth' });
        });
    }

    // function moveCategory(offsetY, targetY) {
    //     moving = true;

    //     let timer = setInterval(() => {
    //         if (targetY > offsetY) {
    //             if (Math.abs(targetY - offsetY) > 8) {
    //                 offsetY += 8;
    //             } else {
    //                 offsetY = targetY;
    //                 moving = false;
    //                 clearInterval(timer);
    //                 for (let i = 0; i < menuList.length; i++) {
    //                     if (i === n) {
    //                         menuList[i].classList.add('active');
    //                     } else {
    //                         menuList[i].classList.remove('acitve');
    //                     }
    //                 }
    //             }
    //         } else {
    //             if (Math.abs(targetY - offsetY) > 8) {
    //                 offsetY -= 8;
    //             } else {
    //                 offsetY = targetY;
    //                 moving = false;
    //                 clearInterval(timer);
    //                 for (let i = 0; i < menuList.length; i++) {
    //                     if (i === n) {
    //                         menuList[i].classList.add('active');
    //                     } else {
    //                         menuList[i].classList.remove('active');
    //                     }
    //                 }
    //             }
    //         }
    //         window.scrollTo({ top: offsetY, behavior: 'smooth' });
    //     }, 1);
    // }
});
