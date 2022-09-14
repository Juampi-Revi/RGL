const scrollable = document.querySelector(".scrollable");

scrollable.addEventListener("wheel", function (e){

    if(e.wheelDelta > 0) {
        this.scrollLeft -=100;
    } else {
        this.scrollLeft +=100;
    }
}, {passive:true});