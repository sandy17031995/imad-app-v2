console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'new part';

var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginleft = '100px';
};