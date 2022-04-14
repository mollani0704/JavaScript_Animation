window.addEventListener('load', () => {
    let body = document.body;
    const ball = document.querySelector('#ball');

    let num = 0;
    let currentX = 0;
    let targetX = 0;
    let moving = false;

    body.addEventListener('wheel', event => {
        if (moving) return;

        let delta = event.deltaY;
        console.log(delta);
        if (delta > 0) {
            if (num < 20) {
                num += 1;
            }

            // /console.log('up');
        } else {
            if (num > 0) {
                num -= 1;
            }
            // console.log('down');
        }

        moving = true;
        targetX = 100 * num;

        console.log(
            `num : ${num}, currentX : ${currentX}, targetX : ${targetX}`,
        );

        let aniTimer = setInterval(() => {
            if (targetX > currentX) {
                if (Math.abs(targetX - currentX) > 5) {
                    currentX += 5;
                    console.log(currentX);
                } else {
                    clearInterval(aniTimer);
                    moving = false;
                }
            } else {
                if (Math.abs(targetX - currentX) > 5) {
                    currentX -= 5;
                } else {
                    currentX = targetX;
                    clearInterval(aniTimer);
                    moving = false;
                }
            }
            ball.style.marginLeft = currentX + 'px';
        }, 5);
    });
});
