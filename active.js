
// --------------------------------------------------------------------------
let ul = document.querySelector('ul');
let men = document.querySelector('#menu');
let colse = document.querySelector('#but');

colse.onclick = function(){
    ul.classList.add('hide');
    colse.classList.add('hide');
    men.classList.remove('hide');
} 
men.onclick = function(){
    ul.classList.remove('hide');
    colse.classList.remove('hide');
    men.classList.add('hide');
} 
// -----------------------------------------------------------------
function blink(){
    let vis = document.querySelector('#visible');
    if(vis.style.visibility == 'hidden')
    {
        vis.style.visibility = 'visible';
    }
    else
    {
        vis.style.visibility = 'hidden';
    }
}
setInterval(blink, 1000);
// --------------------------------------------------------------------
function blink2(){
    let vis = document.querySelector('#visible2');
    if(vis.style.visibility == 'hidden')
    {
        vis.style.visibility = 'visible';
    }
    else
    {
        vis.style.visibility = 'hidden';
    }
}
setInterval(blink2, 1000);
