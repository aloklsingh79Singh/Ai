document.addEventListener('DOMContentLoaded',function(){
  const menuButton=document.querySelector('.menu');
  const nav=document.querySelector('.links');
  if(menuButton&&nav){
    menuButton.addEventListener('click',function(){
      const isOpen=nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(isOpen));
      menuButton.textContent=isOpen?'CLOSE':'MENU';
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded','false');
        menuButton.textContent='MENU';
      });
    });
  }
});
