// utlites
function addClassById(add){
    const addClass=document.getElementById(add);
    addClass.classList.add('hidden');
}

function removeClassById(remove){
    const removeClass=document.getElementById(remove);
    removeClass.classList.remove('hidden');
}
function removeBg(elementid){
    const element=document.getElementById(elementid);
    const bg= element.classList.remove('bg-[#FFA500]');
    return bg;
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
function setTextElementById(elementid,value){
    const element=document.getElementById(elementid);
    element.innerText=value;
}

function getElementTextById(elementid){
    const element=document.getElementById(elementid);
    const text=element.innerText;
    return text;
}

// utlitis

function play(){
    addClassById('home')
    removeClassById('playground')
    randomAlphabat()
}
function playAgain(){
    addClassById('final-score');
    removeClassById('playground');
    randomAlphabat();
    setTextElementById('life',5)
    setTextElementById('score',0)

}
function gameOver(){
    addClassById('playground');
    removeClassById('final-score');
    const thescore=document.getElementById('score');

   const gamescor=thescore.innerText
   setTextElementById('youScore',gamescor);
   const currentalphabat= getElementTextById('current-alphabat');
   removeBg(currentalphabat);
  
}

function handleKeyBordButtonPress(even){
    const playerPresed=even.key;
   if(playerPresed === 'Escaped'){
    gameOver()
   }
    const currentAlphabat=document.getElementById('current-alphabat');
    const curentAlphaElement=currentAlphabat.innerText;
    const expectedAlphabat=curentAlphaElement.toLocaleLowerCase();

    if(playerPresed === expectedAlphabat){
        removeBg(expectedAlphabat);
        randomAlphabat();

        // get score 
        const scoreElement=document.getElementById('score');
        const currntScore=parseInt(scoreElement.innerText);
        console.log(currntScore);

        // update score 
        const newScore=currntScore+1;
        scoreElement.innerText=newScore;
    }
    else{
        removeBg(expectedAlphabat);
        randomAlphabat();

        // get score 
        const lifeElement=document.getElementById('life');
        const currnlife=parseInt(lifeElement.innerText);

        // update score 
        const newlife=currnlife-1;
        lifeElement.innerText=newlife;
        if(newlife===0){
            gameOver()
        }
    }
}
document.addEventListener('keyup',handleKeyBordButtonPress)