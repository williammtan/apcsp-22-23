firstImage = "https://mmc.tirto.id/image/otf/1024x535/2017/11/24/linus-torvalds--tedcom.jpg"
firstCaption = "linux torvalds (hover over me!)"
secondImage = "https://i.pcmag.com/imagery/articles/040JHoVNgc1gh2e7sunj82k-1..v1569492349.png"
secondCaption = "Nvidia F** U"

function changeImg() {
    let img = document.getElementById('img');
    let caption = document.getElementById('caption');
    img.src=secondImage;
    caption.innerHTML=secondCaption;
}

function changeImgBack() {
    let img = document.getElementById('img');
    let caption = document.getElementById('caption');
    img.src=firstImage;
    caption.innerHTML=firstCaption;
}