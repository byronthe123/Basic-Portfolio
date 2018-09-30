console.log('js online');

const header_title = document.getElementById('header_title');
const ph1 = document.getElementById('ph1');

header_title.addEventListener('click', (e)=> {
    window.location.href = '../Basic-Portfolio/index.html';
});

document.addEventListener('click', (e)=>{
    if(e.target.parentNode.className == 'img-container') {
        console.log(e.target.parentNode.id);
        let id = e.target.parentNode.id;
        console.log(id);
        //var img = document.getElementById(id);
        var url = `assets/images/portfolio/${id}.jpg`;
        window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
    }
});

// ph1.addEventListener('click', (e)=>{
//     var img = document.getElementById('ph1');
//     var url = 'assets/images/portfolio/ph1.jpg';
//     window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');

//     // var img = document.getElementById('ph1'),
//     // style = img.currentStyle || window.getComputedStyle(img, false),
//     // bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
//     // window.open(bi,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
//     // console.log(bi);
// });
