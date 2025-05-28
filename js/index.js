let couter = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 2500);

function nextImage(){
    couter++;

    if(couter > 3){
        couter = 1;
    }

    document.getElementById("radio" + couter).checked = true;
}

