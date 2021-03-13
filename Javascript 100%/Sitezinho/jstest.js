
const el = document.querySelector('centralfont');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

el.addEventListener('transitioncancel', function() {
  message.textContent = 'transitioncancel fired'; 
}); 

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired'; 
});