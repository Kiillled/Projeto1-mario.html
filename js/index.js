console.log('Live');
const mario = document.querySelector('.mario');
const emeny = document.querySelector('.emeny');
const over = document.querySelector('.game-over');

const pulo = () =>{
    mario.classList.add('pulo');
    
    setTimeout(() => {
        
        mario.classList.remove('pulo');
        
    }, 500);
}
const loop = setInterval(() =>{
    const emenyPosition = emeny.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if (emenyPosition<= 60 && emenyPosition >0 && marioPosition <= 90){

       emeny.style.animation = 'none';
       emeny.style.left = `${emenyPosition}px`
       
       mario.style.animation = 'none';
       mario.style.left = `${marioPosition}px`

       mario.src = './img/game over.png';
       mario.style.width = '60px'
       mario.style.marginLeft = '25px'

       over.style.display = 'flex';

       clearInterval(loop);
    }
},10);
document.addEventListener('keydown', pulo);
