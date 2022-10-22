
   const menuBtn = document.querySelector('.menuHamburger')
   let menuOpen = false;
   menuBtn.addEventListener('click', () => {
       if(!menuOpen) {
           menuBtn.classList.add('open');
           menuOpen = true;
       } else {
           menuBtn.classList.remove('open');
           menuOpen = false;
       }
   });
   const list = document.querySelector('.rightBarStuff');
menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});


const f = document.getElementById('form');
const q = document.getElementById('query');
const myanimelist = 'https://myanimelist.net/anime.php';
const site = 'WeebNation';

function submitted(event) {
  event.preventDefault();
  const url = myanimelist + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
