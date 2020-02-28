
function scrollTop(elem, duration) {
    let target = document.getElementById(elem);
    target.addEventListener('click', function(){
        let currentY = window.pageYOffset;
        let step = duration / currentY > 1 ? 10 : 20;
        let timeStep = duration / currentY * step;
        let iID = setInterval(scrollUp, timeStep);

        function scrollUp() {
            currentY = window.pageYOffset;
            if (currentY === 0) {
                clearInterval(iID);
            } else {
                scrollBy(0, -step);
            }
        }
    });
}

scrollTop('s-top', 500);
