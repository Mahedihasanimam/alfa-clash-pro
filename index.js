// utlites
function addClassById(add){
    const addClass=document.getElementById(add);
    addClass.classList.add('hidden');
}

function removeClassById(remove){
    const removeClass=document.getElementById(remove);
    removeClass.classList.remove('hidden');
}
function addBgColor(elementId){
    const element=document.getElementById(elementId);
   const bg= element.classList.add('bg-[#FFA500]');
   return bg;
}
function randomAlphabat(){
    const alphabatString='abcdefghijklmnopqrstuvwxyz';
    const alphabat=alphabatString.split('');
    const randomNumber= Math.round(Math.random()*25);
    const alphabats=alphabat[randomNumber]
    const currentAlphabat=document.getElementById('current-alphabat');
    currentAlphabat.innerText=alphabats;
   addBgColor( alphabats);
}

// utlitis

function play(){
    addClassById('home')
    removeClassById('playground')
    randomAlphabat()
}